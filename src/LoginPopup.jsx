import React from "react";
import "./Login.css";

function LoginPopup({ onClose, onLogin }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    // store login info
    localStorage.setItem("user", "true");
    localStorage.setItem("username", email);

    onLogin(email);
    onClose();
  };

  const reloadPage = () => {
  window.location.reload();
};

  return (
    <div className="popup-overlay">

      <div className="popup-box">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <button onClick={reloadPage} type="submit">Login</button>

        </form>

      </div>

    </div>
  );
}

export default LoginPopup;