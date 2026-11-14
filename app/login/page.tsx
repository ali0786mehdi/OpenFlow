"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Sign-in is a UI preview only; authentication has not been connected yet.");
  }

  return (
    <main className="auth-page">
      <Link className="brand auth-brand" href="/" aria-label="OpenFlow home">
        <span className="brand-mark" aria-hidden="true">O</span>
        <span>OpenFlow</span>
      </Link>

      <section className="auth-card" aria-labelledby="login-title">
        <p className="eyebrow"><span className="status-dot" /> Your learning starts here</p>
        <h1 id="login-title">Welcome back</h1>
        <p className="auth-description">Sign in to pick up where you left off.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required />

          <button className="button button-primary auth-submit" type="submit">Sign in <span aria-hidden="true">→</span></button>
          <p className="auth-notice" role="status" aria-live="polite">{notice}</p>
        </form>

        <p className="auth-footnote">Authentication is not connected yet. This preview does not send or store your credentials.</p>
        <Link className="auth-back-link" href="/dashboard">Continue to the demo dashboard <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}
