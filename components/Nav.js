import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-container">
        <Link href="/" className="brand">
          <span className="brand-main">KISHORE</span>
          <span className="brand-highlight">BHARATI</span>
          <span className="brand-main">SISHU</span>
          <span className="brand-sub">BIDYAPITH</span>
        </Link>

        <div className="navlinks">
          <Link href="/">Home</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/login" className="btn">
            Login →
          </Link>
        </div>
      </div>
    </nav>
  );
}