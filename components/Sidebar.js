// import Link from 'next/link';
// export default function Sidebar({admin=false}){const base=admin?'/admin':'/student';return <aside className="side"><h3>{admin?'Admin Panel':'Student Portal'}</h3>{(admin?[['Dashboard','/admin/dashboard'],['Students','/admin/students'],['Admissions','/admin/admissions'],['Fees','/admin/fees'],['Payments','/admin/payments'],['Routine','/admin/routine'],['Exams','/admin/exams']]:[['Dashboard',base+'/dashboard'],['My Profile',base+'/profile'],['Fees & Dues',base+'/fees'],['Payments',base+'/payments'],['Class Routine',base+'/routine'],['Exam Timetable',base+'/exams']]).map(([x,y])=><Link key={y} href={y}>{x}</Link>)}<Link href="/">← Public Website</Link></aside>}
// <Link href="/admin/accounts">
//   <span>💰</span>
//   Accounts
// </Link>

import Link from "next/link";

export default function Sidebar({ admin = false }) {
  const base = admin ? "/admin" : "/student";

  const items = admin
    ? [
        ["Dashboard", "/admin/dashboard"],
        ["Students", "/admin/students"],
        ["Admissions", "/admin/admissions"],
        ["Fees", "/admin/fees"],
        ["Payments", "/admin/payments"],
        ["Routine", "/admin/routine"],
        ["Exams", "/admin/exams"],
        ["Accounts", "/admin/accounts"],
      ]
    : [
        ["Dashboard", base + "/dashboard"],
        ["My Profile", base + "/profile"],
        ["Fees & Dues", base + "/fees"],
        ["Payments", base + "/payments"],
        ["Class Routine", base + "/routine"],
        ["Exam Timetable", base + "/exams"],
      ];

  return (
    <aside className="side">
      <h3>{admin ? "Admin Panel" : "Student Portal"}</h3>

      {items.map(([x, y]) => (
        <Link key={y} href={y}>
          {x}
        </Link>
      ))}

      <Link href="/">Public Website</Link>
    </aside>
  );
}