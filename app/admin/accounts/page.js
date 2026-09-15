 "use client";

import { useMemo, useState } from "react";

const transactions = [
  { date: "2026-09-15", description: "Student Fees", category: "Fees", type: "Income", amount: 85000 },
  { date: "2026-09-14", description: "Teacher Salaries", category: "Salary", type: "Expense", amount: 120000 },
  { date: "2026-09-13", description: "Transport Fees", category: "Transport", type: "Income", amount: 32000 },
  { date: "2026-09-12", description: "Electricity Bill", category: "Utilities", type: "Expense", amount: 18500 },
  { date: "2026-09-10", description: "Admission Fees", category: "Admission", type: "Income", amount: 48000 },
  { date: "2026-09-09", description: "Stationery Purchase", category: "Supplies", type: "Expense", amount: 12800 },
  { date: "2026-09-07", description: "Activity Fees", category: "Activities", type: "Income", amount: 18500 },
  { date: "2026-09-05", description: "Building Maintenance", category: "Maintenance", type: "Expense", amount: 22000 },
];

const demoTotals = {
  weekly: { income: 158500, expense: 173300 },
  monthly: { income: 1840000, expense: 725000 },
  yearly: { income: 21850000, expense: 8420000 },
};

const money = (n) => "₹" + n.toLocaleString("en-IN");

export default function AccountsPage() {
  const [period, setPeriod] = useState("monthly");
  const [customOpen, setCustomOpen] = useState(false);
  const [startDate, setStartDate] = useState("2026-09-01");
  const [endDate, setEndDate] = useState("2026-09-15");
  const [appliedCustom, setAppliedCustom] = useState(false);

  const summary = useMemo(() => {
    if (period !== "custom") return demoTotals[period];

    const start = new Date(startDate);
    const end = new Date(endDate);
    const filtered = transactions.filter((t) => {
      const d = new Date(t.date);
      return d >= start && d <= end;
    });

    return {
      income: filtered.filter(t => t.type === "Income").reduce((s, t) => s + t.amount, 0),
      expense: filtered.filter(t => t.type === "Expense").reduce((s, t) => s + t.amount, 0),
    };
  }, [period, startDate, endDate]);

  const balance = summary.income - summary.expense;

  const applyCustom = () => {
    if (!startDate || !endDate || new Date(startDate) > new Date(endDate)) {
      alert("Please select a valid starting and ending date.");
      return;
    }
    setAppliedCustom(true);
    setPeriod("custom");
    setCustomOpen(false);
  };

  const selectPeriod = (value) => {
    setPeriod(value);
    setAppliedCustom(false);
    if (value === "custom") setCustomOpen(true);
  };

  return (
    <main className="accounts-page">
      <header className="topbar">
        <div>
          <p className="eyebrow">BRIGHTFUTURE ACADEMY</p>
          <h1>School Accounts</h1>
          <p className="muted">Track school income, expenses and balance</p>
        </div>

        <div className="period-area">
          <select value={period} onChange={(e) => selectPeriod(e.target.value)}>
            <option value="weekly">This Week</option>
            <option value="monthly">This Month</option>
            <option value="yearly">This Year</option>
            <option value="custom">Custom Range</option>
          </select>
          <button className="custom-btn" onClick={() => setCustomOpen(true)}>
            ⚙ Customize
          </button>
        </div>
      </header>

      {customOpen && (
        <section className="custom-panel">
          <div>
            <h2>Custom Date Range</h2>
            <p>Select any starting date and ending date to view the exact accounts.</p>
          </div>
          <div className="date-fields">
            <label>Starting Date<input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} /></label>
            <span className="to">TO</span>
            <label>Ending Date<input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} /></label>
            <button className="apply" onClick={applyCustom}>View Report</button>
          </div>
        </section>
      )}

      <section className="selected-range">
        <span>Showing:</span>
        <strong>
          {period === "weekly" ? "This Week" :
           period === "monthly" ? "This Month" :
           period === "yearly" ? "This Year" :
           `${startDate} → ${endDate}`}
        </strong>
        {appliedCustom && <em>Custom range applied</em>}
      </section>

      <section className="cards">
        <div className="card income"><span>Total Income</span><strong>{money(summary.income)}</strong><small>Money received</small></div>
        <div className="card expense"><span>Total Expenses</span><strong>{money(summary.expense)}</strong><small>Money spent</small></div>
        <div className="card balance"><span>Net Balance</span><strong>{money(balance)}</strong><small>{balance >= 0 ? "Income is higher than expense" : "Expense is higher than income"}</small></div>
        <div className="card pending"><span>Pending Fees</span><strong>₹3,40,000</strong><small>42 students pending</small></div>
      </section>

      <section className="grid">
        <div className="panel chart">
          <div className="panel-head">
            <div><h2>Income vs Expenses</h2><p>Financial performance for selected period</p></div>
            <span className="legend"><i></i> Income &nbsp; <b></b> Expense</span>
          </div>
          <div className="bars">
            {[["Week 1",72,46],["Week 2",84,57],["Week 3",62,48],["Week 4",92,66]].map(([m,i,e]) =>
              <div className="month" key={m}>
                <div className="bar-wrap"><i style={{height:i+"%"}}></i><b style={{height:e+"%"}}></b></div>
                <label>{m}</label>
              </div>
            )}
          </div>
        </div>

        <div className="panel breakdown">
          <h2>Expense Breakdown</h2><p>Selected period</p>
          <div className="donut"><div><strong>{money(summary.expense)}</strong><small>Total Expense</small></div></div>
          <div className="break-list">
            <span>Salary <b>52%</b></span><span>Maintenance <b>15%</b></span><span>Utilities <b>10%</b></span><span>Other <b>23%</b></span>
          </div>
        </div>
      </section>

      <section className="panel transactions">
        <div className="panel-head"><div><h2>Recent Transactions</h2><p>Latest school financial activity</p></div><button className="add">+ Add Transaction</button></div>
        <div className="table">
          <div className="tr th"><span>Date</span><span>Description</span><span>Category</span><span>Type</span><span>Amount</span></div>
          {transactions.map((x,n)=>
            <div className="tr" key={n}><span>{x.date}</span><span>{x.description}</span><span>{x.category}</span><span className={"pill "+(x.type==="Income"?"in":"out")}>{x.type}</span><strong>{money(x.amount)}</strong></div>
          )}
        </div>
      </section>
    </main>
  );
}
