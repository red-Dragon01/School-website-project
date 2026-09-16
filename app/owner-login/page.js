"use client";
import "./owner-login.css";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OwnerLogin() {
  const router = useRouter();

  const [ownerId, setOwnerId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/owner-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ownerId,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid Owner ID or Password");
        setLoading(false);
        return;
      }

      router.push("/admin/accounts");
    } catch (error) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="owner-login-page">
      <div className="owner-login-card">

        <div className="owner-icon">
          🔐
        </div>

        <p className="owner-label">
          BRIGHTFUTURE ACADEMY
        </p>

        <h1>Owner Login</h1>

        <p className="owner-description">
          Authorized access only. Please enter your Owner ID
          and password to view school account details.
        </p>

        <form onSubmit={handleLogin}>

          <label>Owner ID</label>

          <input
            type="text"
            placeholder="Enter Owner ID"
            value={ownerId}
            onChange={(e) => setOwnerId(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Checking..." : "Login to Accounts →"}
          </button>

        </form>

        <p className="secure-text">
          🔒 Restricted financial information
        </p>

      </div>
    </main>
  );
}