'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TeacherAssignments() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [className, setClassName] = useState('Class 8A');
    const [subject, setSubject] = useState('Mathematics');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');

    const [assignments, setAssignments] = useState([
        {
            title: 'Algebra Practice',
            className: 'Class 8A',
            subject: 'Mathematics',
            dueDate: '2026-09-20',
        },
        {
            title: 'Geometry Worksheet',
            className: 'Class 9B',
            subject: 'Mathematics',
            dueDate: '2026-09-22',
        },
    ]);

    function createAssignment(e) {
        e.preventDefault();

        if (!title || !dueDate || !description) {
            alert('Please fill in all fields.');
            return;
        }

        const newAssignment = {
            title,
            className,
            subject,
            dueDate,
            description,
        };

        setAssignments([newAssignment, ...assignments]);

        setTitle('');
        setDueDate('');
        setDescription('');

        alert('Assignment created successfully!');
    }

    return (
        <div className="teacher-page">

            {/* Header */}
            <header className="teacher-header">

                <div>
                    <div className="eyebrow">
                        BrightFuture Academy
                    </div>

                    <h1>Assignments</h1>
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
                    <h2>Manage Assignments</h2>

                    <p className="muted">
                        Create and manage assignments for your students.
                    </p>
                </div>

                {/* Create Assignment */}
                <section className="assignment-form-card">

                    <h2>Create New Assignment</h2>

                    <form onSubmit={createAssignment}>

                        <div className="assignment-form-grid">

                            <div>
                                <label>Assignment Title</label>

                                <input
                                    className="input"
                                    type="text"
                                    placeholder="e.g. Algebra Practice"
                                    value={title}
                                    onChange={(e) =>
                                        setTitle(e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label>Class</label>

                                <select
                                    className="input"
                                    value={className}
                                    onChange={(e) =>
                                        setClassName(e.target.value)
                                    }
                                >
                                    <option>Class 8A</option>
                                    <option>Class 9B</option>
                                    <option>Class 10A</option>
                                    <option>Class 7C</option>
                                </select>
                            </div>

                            <div>
                                <label>Subject</label>

                                <select
                                    className="input"
                                    value={subject}
                                    onChange={(e) =>
                                        setSubject(e.target.value)
                                    }
                                >
                                    <option>Mathematics</option>
                                    <option>Science</option>
                                    <option>English</option>
                                    <option>History</option>
                                </select>
                            </div>

                            <div>
                                <label>Due Date</label>

                                <input
                                    className="input"
                                    type="date"
                                    value={dueDate}
                                    onChange={(e) =>
                                        setDueDate(e.target.value)
                                    }
                                />
                            </div>

                        </div>

                        <div style={{ marginTop: 20 }}>

                            <label>Description</label>

                            <textarea
                                className="input"
                                rows="5"
                                placeholder="Write assignment details..."
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }
                            />

                        </div>

                        <button
                            type="submit"
                            className="btn"
                            style={{ marginTop: 20 }}
                        >
                            + Create Assignment
                        </button>

                    </form>

                </section>

                {/* Assignment List */}
                <section className="assignment-list-section">

                    <h2>My Assignments</h2>

                    <div className="assignment-list">

                        {assignments.map((assignment, index) => (

                            <div
                                className="assignment-card"
                                key={index}
                            >

                                <div>
                                    <h3>
                                        {assignment.title}
                                    </h3>

                                    <p>
                                        {assignment.className}
                                        {' • '}
                                        {assignment.subject}
                                    </p>

                                    <small>
                                        Due: {assignment.dueDate}
                                    </small>
                                </div>

                                <span className="assignment-status">
                                    Active
                                </span>

                            </div>

                        ))}

                    </div>

                </section>

            </main>

        </div>
    );
}