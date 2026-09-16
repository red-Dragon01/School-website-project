'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TeacherProfilePage() {
  const router = useRouter();

  const [profile, setProfile] = useState({
    name: 'Rahul Kumar',
    email: 'teacher@demo.com',
    phone: '+91 98765 43210',
    employeeId: 'TCH001',
    subject: 'Mathematics',
    qualification: 'M.Sc Mathematics',
    experience: '6 Years',
    address: 'Kolkata, West Bengal',
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    setEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="teacher-page">
      <header className="teacher-header">
        <div>
          <h2>BrightFuture Academy</h2>
          <p>Teacher Portal</p>
        </div>

        <button
          className="btn"
          onClick={() => router.push('/teacher/dashboard')}
        >
          ← Dashboard
        </button>
      </header>

      <main className="teacher-main">
        <section className="welcome-section">
          <h1>My Profile 👨‍🏫</h1>
          <p>View and manage your teacher information.</p>
        </section>

        <section className="profile-card">
          <div className="profile-top">
            <div className="profile-avatar">
              👨‍🏫
            </div>

            <div>
              <h2>{profile.name}</h2>
              <p>{profile.subject} Teacher</p>
              <span className="profile-status">Active</span>
            </div>
          </div>

          <div className="profile-divider"></div>

          <div className="profile-grid">
            <div className="profile-field">
              <label>Full Name</label>
              {editing ? (
                <input
                  className="input"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.name}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Email</label>
              {editing ? (
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.email}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Phone</label>
              {editing ? (
                <input
                  className="input"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.phone}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Employee ID</label>
              <p>{profile.employeeId}</p>
            </div>

            <div className="profile-field">
              <label>Subject</label>
              {editing ? (
                <input
                  className="input"
                  name="subject"
                  value={profile.subject}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.subject}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Qualification</label>
              {editing ? (
                <input
                  className="input"
                  name="qualification"
                  value={profile.qualification}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.qualification}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Experience</label>
              {editing ? (
                <input
                  className="input"
                  name="experience"
                  value={profile.experience}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.experience}</p>
              )}
            </div>

            <div className="profile-field">
              <label>Address</label>
              {editing ? (
                <input
                  className="input"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.address}</p>
              )}
            </div>
          </div>

          <div className="profile-actions">
            {editing ? (
              <>
                <button
                  className="btn"
                  onClick={saveProfile}
                >
                  💾 Save Changes
                </button>

                <button
                  className="profile-cancel-btn"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="btn"
                onClick={() => setEditing(true)}
              >
                ✏️ Edit Profile
              </button>
            )}
          </div>
          <div className="profile-logout">
  <button
    className="logout-btn"
    onClick={() => router.push('/login')}
  >
    🚪 Logout
  </button>
</div>
        </section>
      </main>
    </div>
  );
}