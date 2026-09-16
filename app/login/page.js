'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
    const router = useRouter();

    const [role, setRole] = useState('student');
    const [email, setEmail] = useState('student@demo.com');
    const [password, setPassword] = useState('student123');
    const [error, setError] = useState('');

    // Demo accounts
    const accounts = {
        student: {
            email: 'student@demo.com',
            password: 'student123',
            dashboard: '/student/dashboard',
        },
        teacher: {
            email: 'teacher@demo.com',
            password: 'teacher123',
            dashboard: '/teacher/dashboard',
        },
        admin: {
            email: 'admin@demo.com',
            password: 'admin123',
            dashboard: '/admin/dashboard',
        },
    };

    function handleRoleChange(e) {
        const selectedRole = e.target.value;

        setRole(selectedRole);
        setError('');

        // Role change করলে সেই role-এর demo email/password automatically বসবে
        setEmail(accounts[selectedRole].email);
        setPassword(accounts[selectedRole].password);
    }

    function go(e) {
        e.preventDefault();
        setError('');

        const account = accounts[role];

        if (
            email.trim().toLowerCase() === account.email &&
            password === account.password
        ) {
            router.push(account.dashboard);
        } else {
            setError('Invalid email or password. Please check your login details.');
        }
    }

    return (
        <div className="login">
            <div className="loginbox">
                <div className="eyebrow">
                    BrightFuture Academy
                </div>

                <h1>Portal Login</h1>

                <p className="muted">
                    Login to access your school management dashboard.
                </p>

                <form onSubmit={go}>
                    <label>Login as</label>

                    <select
                        className="input"
                        value={role}
                        onChange={handleRoleChange}
                    >
                        <option value="student">
                            Student / Parent
                        </option>

                        <option value="teacher">
                            Teacher
                        </option>

                        <option value="admin">
                            School Admin
                        </option>
                    </select>

                    <label>Email</label>

                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />

                    <label>Password</label>

                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />

                    {error && (
                        <p
                            style={{
                                color: 'red',
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        >
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="btn"
                        style={{ width: '100%' }}
                    >
                        Login →
                    </button>
                </form>

                <div
                    style={{
                        marginTop: 20,
                        padding: 12,
                        background: '#f5f5f5',
                        borderRadius: 8,
                    }}
                >
                    <strong>Demo Login</strong>

                    <p style={{ margin: '8px 0 0' }}>
                        Student: student@demo.com / student123
                    </p>

                    <p style={{ margin: '4px 0 0' }}>
                        Teacher: teacher@demo.com / teacher123
                    </p>

                    <p style={{ margin: '4px 0 0' }}>
                        Admin: admin@demo.com / admin123
                    </p>
                </div>

                <p style={{ marginTop: 20 }}>
                    <Link href="/">
                        ← Back to website
                    </Link>
                </p>
            </div>
        </div>
    );
}

