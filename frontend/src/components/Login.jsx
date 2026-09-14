import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function login(e) {
    e.preventDefault();

    try {

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      setMessage(data.message || "Login successful");

      console.log(data);

    } catch (err) {

      setMessage("Unable to connect to server.");

    }

  }

  return (

    <div className="panel">

      <h2>Login</h2>

      <form onSubmit={login}>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

      <br />

      <p>{message}</p>

    </div>

  );

}
