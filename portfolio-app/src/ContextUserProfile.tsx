import { useContext } from "react";
import { UserContext } from "./UserContext";

function ContextUserProfile() {
  const context = useContext(UserContext);

  if (!context) {
    return <p>User context unavailable.</p>;
  }

  const { user, toggleLikes } = context;

  return (
    <div className="context-profile">
      <h2>User Profile</h2>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Likes: {user.likes}</p>

      <button onClick={toggleLikes}>Toggle Likes</button>
    </div>
  );
}

export default ContextUserProfile;