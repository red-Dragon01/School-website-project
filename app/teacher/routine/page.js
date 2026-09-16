'use client';

import { useRouter } from 'next/navigation';

export default function TeacherRoutinePage() {
  const router = useRouter();

  const routine = [
    {
      day: 'Monday',
      classes: [
        {
          time: '10:00 AM - 10:45 AM',
          className: 'Class 8A',
          subject: 'Mathematics',
          room: 'Room 201',
        },
        {
          time: '12:00 PM - 12:45 PM',
          className: 'Class 9B',
          subject: 'Mathematics',
          room: 'Room 305',
        },
        {
          time: '2:00 PM - 2:45 PM',
          className: 'Class 10A',
          subject: 'Mathematics',
          room: 'Room 102',
        },
      ],
    },
    {
      day: 'Tuesday',
      classes: [
        {
          time: '9:00 AM - 9:45 AM',
          className: 'Class 7C',
          subject: 'Mathematics',
          room: 'Room 204',
        },
        {
          time: '11:00 AM - 11:45 AM',
          className: 'Class 8A',
          subject: 'Mathematics',
          room: 'Room 201',
        },
        {
          time: '1:00 PM - 1:45 PM',
          className: 'Class 9B',
          subject: 'Mathematics',
          room: 'Room 305',
        },
      ],
    },
    {
      day: 'Wednesday',
      classes: [
        {
          time: '10:00 AM - 10:45 AM',
          className: 'Class 10A',
          subject: 'Mathematics',
          room: 'Room 102',
        },
        {
          time: '12:00 PM - 12:45 PM',
          className: 'Class 8A',
          subject: 'Mathematics',
          room: 'Room 201',
        },
      ],
    },
    {
      day: 'Thursday',
      classes: [
        {
          time: '9:00 AM - 9:45 AM',
          className: 'Class 9B',
          subject: 'Mathematics',
          room: 'Room 305',
        },
        {
          time: '11:00 AM - 11:45 AM',
          className: 'Class 7C',
          subject: 'Mathematics',
          room: 'Room 204',
        },
        {
          time: '2:00 PM - 2:45 PM',
          className: 'Class 10A',
          subject: 'Mathematics',
          room: 'Room 102',
        },
      ],
    },
    {
      day: 'Friday',
      classes: [
        {
          time: '10:00 AM - 10:45 AM',
          className: 'Class 8A',
          subject: 'Mathematics',
          room: 'Room 201',
        },
        {
          time: '12:00 PM - 12:45 PM',
          className: 'Class 10A',
          subject: 'Mathematics',
          room: 'Room 102',
        },
      ],
    },
  ];

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
          <h1>My Class Routine 📅</h1>
          <p>View your weekly teaching schedule.</p>
        </section>

        <section className="routine-section">
          {routine.map((day) => (
            <div className="routine-day" key={day.day}>
              <div className="routine-day-header">
                <h2>{day.day}</h2>
                <span>{day.classes.length} Classes</span>
              </div>

              <div className="routine-class-list">
                {day.classes.map((item, index) => (
                  <div
                    className="routine-class-card"
                    key={`${day.day}-${index}`}
                  >
                    <div className="routine-time">
                      🕐
                      <span>{item.time}</span>
                    </div>

                    <div className="routine-class-info">
                      <h3>{item.className}</h3>
                      <p>{item.subject}</p>
                    </div>

                    <div className="routine-room">
                      🏫 {item.room}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}