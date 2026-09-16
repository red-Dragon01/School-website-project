'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TeacherExamsPage() {
  const router = useRouter();

  const [exams, setExams] = useState([
    {
      id: 1,
      name: 'Monthly Test',
      className: 'Class 8A',
      subject: 'Mathematics',
      date: '2026-09-25',
      time: '10:00 AM',
      room: 'Room 201',
    },
    {
      id: 2,
      name: 'Unit Test',
      className: 'Class 9B',
      subject: 'Mathematics',
      date: '2026-09-27',
      time: '12:00 PM',
      room: 'Room 305',
    },
    {
      id: 3,
      name: 'Half Yearly Exam',
      className: 'Class 10A',
      subject: 'Mathematics',
      date: '2026-10-05',
      time: '2:00 PM',
      room: 'Room 102',
    },
  ]);

  const [form, setForm] = useState({
    name: '',
    className: 'Class 8A',
    subject: 'Mathematics',
    date: '',
    time: '',
    room: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addExam = (e) => {
    e.preventDefault();

    if (!form.name || !form.date || !form.time || !form.room) {
      alert('Please fill all fields.');
      return;
    }

    const newExam = {
      id: Date.now(),
      ...form,
    };

    setExams([newExam, ...exams]);

    setForm({
      name: '',
      className: 'Class 8A',
      subject: 'Mathematics',
      date: '',
      time: '',
      room: '',
    });

    alert('Exam added successfully!');
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
          <h1>Exam Management 📝</h1>
          <p>View and schedule exams for your classes.</p>
        </section>

        <section className="exam-form-card">
          <h2>Add New Exam</h2>

          <form onSubmit={addExam}>
            <div className="exam-form-grid">
              <div>
                <label>Exam Name</label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="e.g. Monthly Test"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Class</label>
                <select
                  className="input"
                  name="className"
                  value={form.className}
                  onChange={handleChange}
                >
                  <option>Class 7C</option>
                  <option>Class 8A</option>
                  <option>Class 9B</option>
                  <option>Class 10A</option>
                </select>
              </div>

              <div>
                <label>Subject</label>
                <select
                  className="input"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option>Mathematics</option>
                  <option>English</option>
                  <option>Science</option>
                  <option>History</option>
                </select>
              </div>

              <div>
                <label>Exam Date</label>
                <input
                  className="input"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Exam Time</label>
                <input
                  className="input"
                  type="text"
                  name="time"
                  placeholder="e.g. 10:00 AM"
                  value={form.time}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Room</label>
                <input
                  className="input"
                  type="text"
                  name="room"
                  placeholder="e.g. Room 201"
                  value={form.room}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn add-exam-btn">
              + Add Exam
            </button>
          </form>
        </section>

        <section className="exam-list-section">
          <h2>Upcoming Exams</h2>

          <div className="exam-list">
            {exams.map((exam) => (
              <div className="exam-card" key={exam.id}>
                <div className="exam-card-top">
                  <div>
                    <h3>{exam.name}</h3>
                    <p>{exam.subject}</p>
                  </div>

                  <span className="exam-status">Scheduled</span>
                </div>

                <div className="exam-details">
                  <div>
                    <strong>Class</strong>
                    <span>{exam.className}</span>
                  </div>

                  <div>
                    <strong>Date</strong>
                    <span>{exam.date}</span>
                  </div>

                  <div>
                    <strong>Time</strong>
                    <span>{exam.time}</span>
                  </div>

                  <div>
                    <strong>Room</strong>
                    <span>{exam.room}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}