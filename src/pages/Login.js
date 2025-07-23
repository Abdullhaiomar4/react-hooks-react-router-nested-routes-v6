import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // Normally: validate with API
    // Here: just pretend user "123" exists
    navigate(`/profile/123`);
  }

  return (
    <form onSubmit={handleLogin} className="p-4">
      <h2 className="text-xl mb-2">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        className="border px-2 py-1 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1">
        Login
      </button>
    </form>
  );
}

export default Login;
