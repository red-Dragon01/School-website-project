import Link from 'next/link';
import Nav from '../components/Nav';
export default function Home(){
    return <><Nav/><main>
        <section className="hero">
            <div className="container">
                <div className="eyebrow">
                    Empowering Future Leaders
                </div>
                <h1>Learn today.<br/>
                  <span style={{color:'#2d6cdf'}}>
                     Lead tomorrow.
                  </span>
                </h1>
                <p>Welcome to BrightFuture Academy — a modern school experience with academics, admissions, fees, attendance, routines and secure digital services for students and parents.</p>
                <div className="quick">
                   <Link className="btn" href="/login">
                        Login →
                    </Link>
                    <Link className="btn" href="/admin/dashboard">
                      Admin Demo
                    </Link>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <div className="stat">
                            1,248+
                        </div>
                        <div className="muted">
                            Students
                        </div>
                    </div>
                    <div className="card">
                        <div className="stat">
                            86
                        </div>
                        <div className="muted">
                            Expert Teachers
                        </div>
                    </div>
                    <div className="card">
                        <div className="stat">
                            98%
                        </div>
                        <div className="muted">
                            Board Results
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section" style={{paddingTop:0}}>
            <div className="container">
                <div className="card">
                    <div className="eyebrow">
                        Digital School
                    </div>
                    <h2 style={{fontSize:34}}>
                        Everything parents and students need in one place.
                    </h2>
                    <div className="grid">
                        <div>
                            <h3>Admissions</h3>
                            <p className="muted">
                                Online applications, document tracking and approval status.
                            </p>
                        </div>
                        <div>
                            <h3>Fees & Payments</h3>
                            <p className="muted">
                                Track dues, payment history and download receipts.
                            </p>
                        </div>
                        <div>
                            <h3>Academics</h3>
                            <p className="muted">
                                Routine, exam timetable, attendance and notices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer className="footer">
        <div className="container">
            © 2026 KISHORE BHARATI SISHU BIDYAPITH · Demo Presentation Website
        </div>
    </footer>
</>}
