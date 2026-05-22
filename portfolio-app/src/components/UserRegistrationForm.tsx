import { useForm } from "react-hook-form"
import { useEffect } from "react"

type FormValues = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  role: string
  terms: boolean
}

function UserRegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const password = watch("password")
  const formValues = watch()

  useEffect(() => {
    const savedForm = localStorage.getItem("registrationForm")

    if (savedForm) {
      const parsedForm = JSON.parse(savedForm)

      Object.keys(parsedForm).forEach((key) => {
        setValue(key as keyof FormValues, parsedForm[key])
      })
    }
  }, [setValue])

  useEffect(() => {
    localStorage.setItem(
      "registrationForm",
      JSON.stringify(formValues)
    )
  }, [formValues])

  async function onSubmit(data: FormValues) {
    console.log(data)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Registration successful!")

    reset()

    localStorage.removeItem("registrationForm")
  }

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          autoFocus
          {...register("fullName", {
            required: "Full name is required",
            minLength: {
              value: 3,
              message: "Full name must be at least 3 characters",
            },
          })}
        />
        {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
              message:
                "Password must include uppercase, lowercase, and a number",
            },
          })}
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "Passwords must match",
          })}
        />
        {errors.confirmPassword && (
          <p className="error-message">{errors.confirmPassword.message}</p>
        )}

        <label htmlFor="role">Role / Account Type</label>
        <select
          id="role"
          {...register("role", {
            required: "Please select a role",
          })}
        >
          <option value="">Select a role...</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Product Manager">Product Manager</option>
        </select>
        {errors.role && <p className="error-message">{errors.role.message}</p>}

        <label className="checkbox-container">
          <input
            type="checkbox"
            {...register("terms", {
              required: "You must accept the terms and conditions",
            })}
          />
          <span className="checkmark"></span>
          I agree to the Terms & Conditions
        </label>
        {errors.terms && <p className="error-message">{errors.terms.message}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  )
}

export default UserRegistrationForm