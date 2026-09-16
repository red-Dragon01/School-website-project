'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TeacherAttendance() {
    const router = useRouter();

    const [selectedClass, setSelectedClass] = useState('Class 8A');
    const [date, setDate] = useState('2026-09-15');

    const [students, setStudents] = useState([
        {
            id: 'ST001',
            name: 'Aarav Sharma',
            roll: '01',
            status: 'Present',
        },
        {
            id: 'ST002',
            name: 'Ananya Das',
            roll: '02',
            status: 'Present',
        },
        {
            id: 'ST003',
            name: 'Rahul Roy',
            roll: '03',
            status: 'Absent',
        },
        {
            id: 'ST004',
            name: 'Priya Sen',
            roll: '04',
            status: 'Present',
        },
        {
            id: 'ST005',
            name: 'Arjun Patel',
            roll: '05',
            status: 'Present',
        },
        {
            id: 'ST006',
            name: 'Sneha Gupta',
            roll: '06',
            status: 'Absent',
        },
    ]);

    function changeStatus(id, status) {
        setStudents((currentStudents) =>
            currentStudents.map((student) =>
                student.id === id
                    ? { ...student, status }
                    : student
            )
        );
    }

    function saveAttendance() {
        alert('Attendance saved successfully!');
    }

    const presentCount = students.filter(
        (student) => student.status === 'Present'
    ).length;

    const absentCount = students.filter(
        (student) => student.status === 'Absent'
    ).length;

    return (
        <div className="teacher-page">

            {/* Header */}
            <header className="teacher-header">

                <div>
                    <div className="eyebrow">
                        BrightFuture Academy
                    </div>

                    <h1>Attendance</h1>
                </div>

                <button
                    className="btn"
                    onClick={() =>
                        router.push('/teacher/dashboard')
                    }
                >
                    ← Dashboard
                </button>

            </header>

            {/* Main */}
            <main className="teacher-main">

                <div className="welcome-section">
                    <h2>Take Attendance</h2>

                    <p className="muted">
                        Mark attendance for your students.
                    </p>
                </div>

                {/* Filters */}
                <div className="attendance-filters">

                    <div>
                        <label>Class</label>

                        <select
                            className="input"
                            value={selectedClass}
                            onChange={(e) =>
                                setSelectedClass(e.target.value)
                            }
                        >
                            <option>Class 8A</option>
                            <option>Class 9B</option>
                            <option>Class 10A</option>
                            <option>Class 7C</option>
                        </select>
                    </div>

                    <div>
                        <label>Date</label>

                        <input
                            className="input"
                            type="date"
                            value={date}
                            onChange={(e) =>
                                setDate(e.target.value)
                            }
                        />
                    </div>

                </div>

                {/* Summary */}
                <div className="attendance-summary">

                    <div className="attendance-summary-card">
                        <strong>{students.length}</strong>
                        <span>Total Students</span>
                    </div>

                    <div className="attendance-summary-card">
                        <strong>{presentCount}</strong>
                        <span>Present</span>
                    </div>

                    <div className="attendance-summary-card">
                        <strong>{absentCount}</strong>
                        <span>Absent</span>
                    </div>

                </div>

                {/* Student List */}
                <div className="attendance-card">

                    <div className="attendance-table-wrapper">

                        <table className="attendance-table">

                            <thead>
                                <tr>
                                    <th>Roll</th>
                                    <th>Student</th>
                                    <th>Student ID</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                {students.map((student) => (
                                    <tr key={student.id}>

                                        <td>
                                            {student.roll}
                                        </td>

                                        <td>
                                            <strong>
                                                {student.name}
                                            </strong>
                                        </td>

                                        <td>
                                            {student.id}
                                        </td>

                                        <td>
                                            <div className="attendance-buttons">

                                                <button
                                                    type="button"
                                                    className={
                                                        student.status === 'Present'
                                                            ? 'attendance-btn active-present'
                                                            : 'attendance-btn'
                                                    }
                                                    onClick={() =>
                                                        changeStatus(
                                                            student.id,
                                                            'Present'
                                                        )
                                                    }
                                                >
                                                    ✓ Present
                                                </button>

                                                <button
                                                    type="button"
                                                    className={
                                                        student.status === 'Absent'
                                                            ? 'attendance-btn active-absent'
                                                            : 'attendance-btn'
                                                    }
                                                    onClick={() =>
                                                        changeStatus(
                                                            student.id,
                                                            'Absent'
                                                        )
                                                    }
                                                >
                                                    ✕ Absent
                                                </button>

                                            </div>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                    <button
                        type="button"
                        className="btn save-attendance"
                        onClick={saveAttendance}
                    >
                        Save Attendance
                    </button>

                </div>

            </main>

        </div>
    );
}