'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar({ admin = false, teacher = false }) {
  const [open, setOpen] = useState(false);

  const base = admin ? '/admin' : teacher ? '/teacher' : '/student';

  const menuItems = admin
    ? [
        ['Dashboard', '/admin/dashboard'],
        ['Students', '/admin/students'],
        ['Admissions', '/admin/admissions'],
        ['Fees', '/admin/fees'],
        ['Payments', '/admin/payments'],
        ['Routine', '/admin/routine'],
        ['Exams', '/admin/exams'],
        ['Accounts', '/admin/accounts'],
      ]
    : teacher
    ? [
        ['🏠 Dashboard', '/teacher/dashboard'],
        ['👨‍🏫 My Classes', '/teacher/classes'],
        ['👨‍🎓 Students', '/teacher/students'],
        ['📋 Attendance', '/teacher/attendance'],
        ['📝 Assignments', '/teacher/assignments'],
        ['📝 Exams', '/teacher/exams'],
        ['📊 Grades', '/teacher/grades'],
        ['📅 Routine', '/teacher/routine'],
        ['📢 Notices', '/teacher/notices'],
        ['👤 My Profile', '/teacher/profile'],
      ]
    : [
        ['Dashboard', base + '/dashboard'],
        ['My Profile', base + '/profile'],
        ['Fees & Dues', base + '/fees'],
        ['Payments', base + '/payments'],
        ['Class Routine', base + '/routine'],
        ['Exam Timetable', base + '/exams'],
      ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="sidebar-mobile-btn"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <aside className={`side ${open ? 'sidebar-open' : ''}`}>
        <div className="sidebar-heading">
          <h3>
            {admin
              ? 'Admin Panel'
              : teacher
              ? 'Teacher Portal'
              : 'Student Portal'}
          </h3>

          {/* Mobile Close Button */}
          <button
            className="sidebar-close-btn"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-menu">
          {menuItems.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <Link
            href="/"
            className="public-website-link"
            onClick={() => setOpen(false)}
          >
            ← Public Website
          </Link>
        </div>
      </aside>
    </>
  );
}