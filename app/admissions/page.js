import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <main className="admissions-page">
      <section className="hero">
        <div className="container">
          <div className="eyebrow">
            ADMISSIONS
          </div>

          <h1>
            Start your journey at{" "}
            <span style={{ color: "#2d6cdf" }}>
              BrightFuture Academy.
            </span>
          </h1>

          <p>
            Join BrightFuture Academy and give your child a strong
            foundation for a bright and successful future.
          </p>

          <div className="quick">
            <Link href="/login" className="btn">
              Apply Now →
            </Link>

            <Link href="/" className="btn">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid">
            <div className="card">
              <h3>📝 Easy Application</h3>
              <p className="muted">
                Simple and convenient admission application process.
              </p>
            </div>

            <div className="card">
              <h3>📄 Document Tracking</h3>
              <p className="muted">
                Keep track of required documents and application status.
              </p>
            </div>

            <div className="card">
              <h3>🎓 Quality Education</h3>
              <p className="muted">
                Modern academics with experienced teachers and digital
                learning facilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}