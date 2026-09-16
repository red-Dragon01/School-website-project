'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TeacherGradesPage() {
  const router = useRouter();

  const [selectedClass, setSelectedClass] = useState('Class 8A');
  const [selectedExam, setSelectedExam] = useState('Monthly Test');

  const [students, setStudents] = useState([
    {
      id: 'ST001',
      name: 'Aarav Sharma',
      roll: '01',
      marks: 85,
    },
    {
      id: 'ST002',
      name: 'Ananya Das',
      roll: '02',
      marks: 92,
    },
    {
      id: 'ST003',
      name: 'Rahul Roy',
      roll: '03',
      marks: 76,
    },
    {
      id: 'ST004',
      name: 'Priya Sen',
      roll: '04',
      marks: 95,
    },
    {
      id: 'ST005',
      name: 'Arjun Patel',
      roll: '05',
      marks: 68,
    },
    {
      id: 'ST006',
      name: 'Sneha Gupta',
      roll: '06',
      marks: 88,
    },
  ]);

  const updateMarks = (id, value) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, marks: value }
          : student
      )
    );
  };

  const getGrade = (marks) => {
    if (marks >= 90) return 'A+';
    if (marks >= 80) return 'A';
    if (marks >= 70) return 'B';
    if (marks >= 60) return 'C';
    if (marks >= 50) return 'D';
    return 'F';
  };

  const saveGrades = () => {
    alert('Grades saved successfully!');
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
          <h1>Grades Management 📊</h1>
          <p>Enter and manage student marks.</p>
        </section>

        <section className="grade-filters">
          <div>
            <label>Class</label>
            <select
              className="input"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option>Class 7C</option>
              <option>Class 8A</option>
              <option>Class 9B</option>
              <option>Class 10A</option>
            </select>
          </div>

          <div>
            <label>Exam</label>
            <select
              className="input"
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
            >
              <option>Monthly Test</option>
              <option>Unit Test</option>
              <option>Half Yearly Exam</option>
              <option>Final Exam</option>
            </select>
          </div>

          <div>
            <label>Subject</label>
            <select className="input" defaultValue="Mathematics">
              <option>Mathematics</option>
              <option>English</option>
              <option>Science</option>
              <option>History</option>
            </select>
          </div>
        </section>

        <section className="grade-table-card">
          <div className="grade-table-header">
            <div>
              <h2>{selectedClass} - {selectedExam}</h2>
              <p>Subject: Mathematics | Full Marks: 100</p>
            </div>

            <button
              className="btn save-grades-btn"
              onClick={saveGrades}
            >
              💾 Save Grades
            </button>
          </div>

          <div className="grade-table-wrapper">
            <table className="grade-table">
              <thead>
                <tr>
                  <th>Roll</th>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Marks</th>
                  <th>Grade</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.roll}</td>
                    <td>{student.id}</td>
                    <td>{student.name}</td>

                    <td>
                      <input
                        className="marks-input"
                        type="number"
                        min="0"
                        max="100"
                        value={student.marks}
                        onChange={(e) =>
                          updateMarks(
                            student.id,
                            Math.min(100, Math.max(0, Number(e.target.value)))
                          )
                        }
                      />
                    </td>

                    <td>
                      <span className="grade-badge">
                        {getGrade(student.marks)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}