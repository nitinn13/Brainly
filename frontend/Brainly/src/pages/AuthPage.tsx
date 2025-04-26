import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { login, signup } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); 
  const [role, setRole] = useState<"user" | "admin">("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (mode === "login") {
        await login(email, password, role);
        console.log("Login successful!");
      } else {
        await signup(username, email, password, role);
        console.log("Signup successful!");
      }
      navigate("/allposts");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setMode("login")}
            className={`px-4 py-2 mx-2 rounded ${
              mode === "login" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`px-4 py-2 mx-2 rounded ${
              mode === "signup" ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && <p className="text-red-500 text-center">{error}</p>}

          {mode === "signup" && (
            <input
              type="text"
              placeholder="Username"
              className="border p-2 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "user" | "admin")}
            className="border p-2 rounded"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className={`py-2 rounded text-white ${
              mode === "login" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {mode === "login" ? "Login" : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
