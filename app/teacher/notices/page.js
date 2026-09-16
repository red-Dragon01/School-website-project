'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TeacherNoticesPage() {
  const router = useRouter();

  const [notices, setNotices] = useState([
    {
      id: 1,
      title: 'Parent-Teacher Meeting',
      audience: 'All Classes',
      date: '2026-09-18',
      message:
        'Parent-Teacher meeting will be held in the school auditorium at 10:00 AM.',
    },
    {
      id: 2,
      title: 'Mathematics Test Reminder',
      audience: 'Class 8A',
      date: '2026-09-20',
      message:
        'Please remind all Class 8A students to prepare for the upcoming Mathematics test.',
    },
  ]);

  const [form, setForm] = useState({
    title: '',
    audience: 'All Classes',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const publishNotice = (e) => {
    e.preventDefault();

    if (!form.title || !form.date || !form.message) {
      alert('Please fill all fields.');
      return;
    }

    const newNotice = {
      id: Date.now(),
      ...form,
    };

    setNotices([newNotice, ...notices]);

    setForm({
      title: '',
      audience: 'All Classes',
      date: '',
      message: '',
    });

    alert('Notice published successfully!');
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
          <h1>Notice Board 📢</h1>
          <p>Create and publish notices for your students.</p>
        </section>

        <section className="notice-form-card">
          <h2>Publish New Notice</h2>

          <form onSubmit={publishNotice}>
            <div className="notice-form-grid">
              <div>
                <label>Notice Title</label>
                <input
                  className="input"
                  type="text"
                  name="title"
                  placeholder="Enter notice title"
                  value={form.title}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Audience</label>
                <select
                  className="input"
                  name="audience"
                  value={form.audience}
                  onChange={handleChange}
                >
                  <option>All Classes</option>
                  <option>Class 7C</option>
                  <option>Class 8A</option>
                  <option>Class 9B</option>
                  <option>Class 10A</option>
                </select>
              </div>

              <div>
                <label>Notice Date</label>
                <input
                  className="input"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="notice-message-field">
              <label>Notice Message</label>
              <textarea
                className="input"
                name="message"
                rows="5"
                placeholder="Write your notice here..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn publish-notice-btn">
              📢 Publish Notice
            </button>
          </form>
        </section>

        <section className="notice-list-section">
          <h2>Published Notices</h2>

          <div className="notice-list">
            {notices.map((notice) => (
              <div className="notice-card" key={notice.id}>
                <div className="notice-card-top">
                  <div>
                    <h3>{notice.title}</h3>
                    <span className="notice-audience">
                      👥 {notice.audience}
                    </span>
                  </div>

                  <span className="notice-date">
                    {notice.date}
                  </span>
                </div>

                <p className="notice-message">
                  {notice.message}
                </p>

                <span className="notice-status">
                  Published
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}