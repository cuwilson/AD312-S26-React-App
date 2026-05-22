import { createContext, useState } from "react";


type User = {
  name: string;
  email: string;
  likes: string;
};

type UserContextType = {
  user: User;
  toggleLikes?: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "Oreo Wilson",
    email: "oreo.wilson@cutecats.com",
    likes: "Naps on blankets",
  });

  function toggleLikes() {
    setUser((prevUser) => ({
      ...prevUser,
      likes: prevUser.likes === "Naps on blankets" ? "Feather toys" : "Naps on blankets",
    }));
  }

  return (
    <UserContext.Provider value={{ user, toggleLikes }}>
      {children}
    </UserContext.Provider>
  );
}