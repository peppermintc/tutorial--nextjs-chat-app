import React from "react";

export default function Auth() {
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            <input placeholder="Email" className="text-input" />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
