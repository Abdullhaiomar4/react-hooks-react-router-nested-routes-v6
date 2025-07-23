// src/pages/UserProfile.js
import { useParams, useOutletContext, Navigate } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  const users = useOutletContext();
  const user = users.find((u) => u.id === parseInt(id));

  // Redirect to home if user not found
  if (!user) return <Navigate to="/" />;

  return (
    <aside>
      <h1>{user.name}</h1>
    </aside>
  );
}

export default UserProfile;
