import { useParams, Navigate } from "react-router-dom";

const fakeUsers = [
  { id: "123", name: "Zakariya Haji" },
  { id: "456", name: "Abdullahi Omar" },
];

function Profile() {
  const { id } = useParams();
  const user = fakeUsers.find((u) => u.id === id);

  if (!user) {
    return <Navigate to="/not-found" />;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl">Welcome, {user.name}!</h2>
      <p>User ID: {user.id}</p>
    </div>
  );
}

export default Profile;
