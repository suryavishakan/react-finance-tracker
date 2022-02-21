import React, { useState } from "react";
import styles from "./Signup.module.css";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, loading, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label>
        <span>Name</span>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      {!loading && <button className="btn">SignUp</button>}
      {loading && (
        <button className="btn" disabled>
          Loading
        </button>
      )}

      {error && <h2>{error}</h2>}
    </form>
  );
};

export default Signup;
