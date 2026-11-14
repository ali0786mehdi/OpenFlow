"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("Alex Morgan");
  const [handle, setHandle] = useState("alexm");
  const [bio, setBio] = useState("Learning algorithms one step at a time.");
  const [notice, setNotice] = useState("");

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Profile updated for this preview. Changes are not stored yet.");
  }

  return (
    <main className="profile-page">
      <header className="profile-header">
        <Link className="brand" href="/dashboard" aria-label="Back to dashboard">
          <span className="brand-mark" aria-hidden="true">O</span>
          <span>OpenFlow</span>
        </Link>
        <Link className="button button-secondary" href="/dashboard">Back to dashboard</Link>
      </header>

      <section className="profile-content" aria-labelledby="profile-title">
        <p className="eyebrow"><span className="status-dot" /> Your learning space</p>
        <h1 id="profile-title">Profile settings</h1>
        <p className="profile-intro">Make your learning profile your own. This is a local UI preview; profile changes are not persisted.</p>

        <div className="profile-grid">
          <aside className="profile-summary">
            <div className="profile-avatar" aria-hidden="true">{name.trim().charAt(0).toUpperCase() || "O"}</div>
            <h2>{name || "Your name"}</h2>
            <p>@{handle || "username"}</p>
            <span className="profile-badge">Learner</span>
          </aside>

          <form className="profile-form" onSubmit={handleSave}>
            <div className="profile-form-heading">
              <h2>Personal details</h2>
              <p>Update how you appear to the OpenFlow community.</p>
            </div>

            <label htmlFor="display-name">Display name</label>
            <input id="display-name" name="name" value={name} onChange={(event) => setName(event.target.value)} maxLength={60} required />

            <label htmlFor="username">Username</label>
            <input id="username" name="username" value={handle} onChange={(event) => setHandle(event.target.value.replace(/[^a-zA-Z0-9_-]/g, ""))} maxLength={30} />
            <span className="field-hint">Letters, numbers, underscores, and hyphens.</span>

            <label htmlFor="bio">About you</label>
            <textarea id="bio" name="bio" value={bio} onChange={(event) => setBio(event.target.value)} rows={4} maxLength={160} />
            <span className="field-hint">{bio.length}/160 characters</span>

            <div className="profile-form-actions">
              <button className="button button-primary" type="submit">Save changes <span aria-hidden="true">→</span></button>
              <p className="profile-notice" role="status" aria-live="polite">{notice}</p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
