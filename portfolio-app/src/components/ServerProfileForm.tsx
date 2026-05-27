import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"

type ProfileFormData = {
  username: string
  email: string
  bio: string
  notifications: boolean
}

function ServerProfileForm() {
  const queryClient = useQueryClient()
  const [saveMessage, setSaveMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isDirty },
  } = useForm<ProfileFormData>()

  const { data, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3001/profile")

      if (!response.ok) {
        throw new Error("Failed to fetch profile")
      }

      return response.json()
    },
  })

  useEffect(() => {
    if (data) {
      reset(data)
    }
  }, [data, reset])

  const mutation = useMutation({
    mutationFn: async (updatedProfile: ProfileFormData) => {
      if (updatedProfile.email === "conflict@example.com") {
        throw new Error("That email address is already in use")
      }

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const response = await fetch("http://localhost:3001/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfile),
      })

      if (!response.ok) {
        throw new Error("Failed to update profile")
      }

      return response.json()
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["userProfile"],
      })

      reset(data)
      setSaveMessage("Profile saved successfully!")

      setTimeout(() => {
        setSaveMessage("")
      }, 3000)
    },

    onError: (error: Error) => {
      setError("email", {
        type: "server",
        message: error.message,
      })
    },
  })

  function onSubmit(data: ProfileFormData) {
    mutation.mutate(data)
  }

  if (isLoading) {
    return <p>Loading profile...</p>
  }

  return (
    <div className="container">
      <h1>Server Profile Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username is required",
          })}
        />
        {errors.username && (
          <p className="error-message">{errors.username.message}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}

        <textarea
          placeholder="Bio"
          {...register("bio")}
        />

        <label className="checkbox-container">
          <input
            type="checkbox"
            {...register("notifications")}
          />
          <span className="checkmark"></span>
          Enable Notifications
        </label>

        <button
          type="submit"
          disabled={!isDirty || mutation.isPending}
        >
          {mutation.isPending ? "Saving..." : "Save Profile"}
        </button>
        {saveMessage && (
          <p className="success-message">
            {saveMessage}
          </p>
        )}
      </form>
    </div>
  )
}

export default ServerProfileForm