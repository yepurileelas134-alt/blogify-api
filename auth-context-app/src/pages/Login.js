import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    const userData = {
      name: "Priya",
      email: email
    };

    const fakeToken = "abc123token";

    login(userData, fakeToken);

    navigate("/dashboard");
  };

  return (

    <div>

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default Login;