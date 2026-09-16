'use client';

import { useRouter } from 'next/navigation';
import Sidebar from '../../../components/Sidebar';

export default function TeacherDashboard() {
    const router = useRouter();

    return (
        <div className="teacher-layout">

            {/* Teacher Sidebar */}
            <Sidebar teacher={true} />

            {/* Right Side */}
            <div className="teacher-content">

                {/* Header */}
                <header className="teacher-header">
                    <div>
                        <div className="eyebrow">
                            KISHORE BHARATI SHISHU BIDYAPITH
                        </div>
                        
                    </div>

                    <div className="teacher-header-actions">
                        <button
                            className="notice-icon-btn"
                            onClick={() => router.push('/teacher/notices')}
                            title="Notices"
                        >
                            🔔
                            <span className="notice-dot"></span>
                        </button>

                        <button
                            className="profile-icon-btn"
                            onClick={() => router.push('/teacher/profile')}
                            title="My Profile"
                        >
                            👤
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="teacher-main">

                    <div className="welcome-section">
                        <h2>Welcome, Teacher 👋</h2>
                        <p className="muted">
                            Manage your classes, students, attendance,
                            assignments and grades.
                        </p>
                    </div>

                    {/* Statistics */}
                    <div className="teacher-stats">

                        <div
                            className="teacher-card"
                            onClick={() => router.push('/teacher/classes')}
                            style={{ cursor: 'pointer' }}
                        >
                            <h3>📚</h3>
                            <h2>4</h2>
                            <p>My Classes</p>
                        </div>

                        <div
                            className="teacher-card"
                            onClick={() => router.push('/teacher/students')}
                            style={{ cursor: 'pointer' }}
                        >
                            <h3>👨‍🎓</h3>
                            <h2>126</h2>
                            <p>Total Students</p>
                        </div>

                        <div
                            className="teacher-card"
                            onClick={() => router.push('/teacher/attendance')}
                            style={{ cursor: 'pointer' }}
                        >
                            <h3>✅</h3>
                            <h2>92%</h2>
                            <p>Attendance</p>
                        </div>

                        <div
                            className="teacher-card"
                            onClick={() => router.push('/teacher/assignments')}
                            style={{ cursor: 'pointer' }}
                        >
                            <h3>📝</h3>
                            <h2>8</h2>
                            <p>Assignments</p>
                        </div>

                    </div>

                    {/* Today's Classes */}
                    <section className="teacher-section">

                        <h2>Today's Classes</h2>

                        <div className="class-list">

                            <div className="class-item">
                                <div>
                                    <h3>Class 8A</h3>
                                    <p>Mathematics</p>
                                </div>
                                <strong>10:00 AM</strong>
                            </div>

                            <div className="class-item">
                                <div>
                                    <h3>Class 9B</h3>
                                    <p>Mathematics</p>
                                </div>
                                <strong>12:00 PM</strong>
                            </div>

                            <div className="class-item">
                                <div>
                                    <h3>Class 10A</h3>
                                    <p>Mathematics</p>
                                </div>
                                <strong>2:00 PM</strong>
                            </div>

                        </div>

                    </section>

                </main>
            </div>
        </div>
    );
}