'use client';

import { useRouter } from 'next/navigation';

export default function TeacherStudents() {
    const router = useRouter();

    const students = [
        {
            id: 'ST001',
            name: 'Aarav Sharma',
            className: 'Class 8A',
            roll: '01',
            attendance: '95%',
        },
        {
            id: 'ST002',
            name: 'Ananya Das',
            className: 'Class 8A',
            roll: '02',
            attendance: '92%',
        },
        {
            id: 'ST003',
            name: 'Rahul Roy',
            className: 'Class 8A',
            roll: '03',
            attendance: '88%',
        },
        {
            id: 'ST004',
            name: 'Priya Sen',
            className: 'Class 8A',
            roll: '04',
            attendance: '97%',
        },
        {
            id: 'ST005',
            name: 'Arjun Patel',
            className: 'Class 9B',
            roll: '01',
            attendance: '90%',
        },
        {
            id: 'ST006',
            name: 'Sneha Gupta',
            className: 'Class 9B',
            roll: '02',
            attendance: '94%',
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

                    <h1>Students</h1>
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
                    <h2>My Students</h2>

                    <p className="muted">
                        View students from your assigned classes.
                    </p>
                </div>

                {/* Student Table */}
                <div className="student-table-card">

                    <div className="student-table-wrapper">

                        <table className="student-table">

                            <thead>
                                <tr>
                                    <th>Student ID</th>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Roll No.</th>
                                    <th>Attendance</th>
                                </tr>
                            </thead>

                            <tbody>

                                {students.map((student) => (
                                    <tr key={student.id}>

                                        <td>
                                            <strong>
                                                {student.id}
                                            </strong>
                                        </td>

                                        <td>
                                            {student.name}
                                        </td>

                                        <td>
                                            {student.className}
                                        </td>

                                        <td>
                                            {student.roll}
                                        </td>

                                        <td>
                                            <span className="attendance-badge">
                                                {student.attendance}
                                            </span>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </main>

        </div>
    );
}