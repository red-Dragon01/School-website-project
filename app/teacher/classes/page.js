'use client';

import { useRouter } from 'next/navigation';

export default function TeacherClasses() {
    const router = useRouter();

    const classes = [
        {
            className: 'Class 8A',
            subject: 'Mathematics',
            students: 32,
            room: 'Room 201',
            time: '10:00 AM - 10:45 AM',
        },
        {
            className: 'Class 9B',
            subject: 'Mathematics',
            students: 30,
            room: 'Room 305',
            time: '12:00 PM - 12:45 PM',
        },
        {
            className: 'Class 10A',
            subject: 'Mathematics',
            students: 34,
            room: 'Room 102',
            time: '2:00 PM - 2:45 PM',
        },
        {
            className: 'Class 7C',
            subject: 'Mathematics',
            students: 30,
            room: 'Room 204',
            time: '3:00 PM - 3:45 PM',
        },
    ];

    return (
        <div className="teacher-page">

            {/* Header */}
            <header className="teacher-header">

                <div>
                    <div className="eyebrow">
                        BrightFuture Academy
                    </div>

                    <h1>My Classes</h1>
                </div>

                <button
                    className="btn"
                    onClick={() => router.push('/teacher/dashboard')}
                >
                    ← Dashboard
                </button>

            </header>

            {/* Main */}
            <main className="teacher-main">

                <div className="welcome-section">
                    <h2>Assigned Classes</h2>

                    <p className="muted">
                        View all classes and subjects assigned to you.
                    </p>
                </div>

                {/* Classes */}
                <div className="classes-grid">

                    {classes.map((item, index) => (
                        <div
                            className="class-card"
                            key={index}
                        >

                            <div className="class-card-top">
                                <div>
                                    <h2>{item.className}</h2>

                                    <p className="subject">
                                        {item.subject}
                                    </p>
                                </div>

                                <span className="class-icon">
                                    📚
                                </span>
                            </div>

                            <div className="class-info">

                                <div>
                                    <span>👨‍🎓</span>
                                    <strong>
                                        {item.students}
                                    </strong>
                                    <small> Students</small>
                                </div>

                                <div>
                                    <span>🏫</span>
                                    <strong>
                                        {item.room}
                                    </strong>
                                </div>

                                <div>
                                    <span>⏰</span>
                                    <strong>
                                        {item.time}
                                    </strong>
                                </div>

                            </div>

                            <button
                                className="btn"
                                style={{ width: '100%' }}
                            >
                                View Class
                            </button>

                        </div>
                    ))}

                </div>

            </main>

        </div>
    );
}