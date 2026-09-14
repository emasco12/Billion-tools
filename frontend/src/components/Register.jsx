import { useState } from "react";

export default function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  async function register(e) {

    e.preventDefault();

    try {

      const res = await fetch("/api/auth/register", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(form)

      });

      const data = await res.json();

      setMessage(data.message);

    } catch (err) {

      setMessage("Unable to connect to server.");

    }

  }

  return (

    <div className="panel">

      <h2>Create Account</h2>

      <form onSubmit={register}>

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">

          Create Account

        </button>

      </form>

      <br />

      <p>{message}</p>

    </div>

  );

}
