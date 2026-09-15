import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div
        className="container"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" className="brand">
          Bright<span>Future</span> Academy
        </Link>

        <div className="navlinks">
          <Link href="/">Home</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/login">Student Portal</Link>
          <Link href="/admin/dashboard">Admin</Link>
          <Link href="/login" className="btn">
            Login →
          </Link>
        </div>
      </div>
    </nav>
  );
}