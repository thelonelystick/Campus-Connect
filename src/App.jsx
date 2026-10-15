import React from 'react';

const stats = [
  { label: 'Classes today', value: '5' },
  { label: 'Study seats free', value: '12' },
  { label: 'Notices unread', value: '3' },
  { label: 'Marketplace items', value: '18' },
];

const quickLinks = ['Dashboard', 'Timetable', 'Library', 'Study Resources', 'Marketplace'];

export default function App() {
  return (
    <div className="campus-app">
      <header className="topbar">
        <div>
          <p className="eyebrow">CampusConnect</p>
          <h1>Student Portal</h1>
        </div>
        <button className="primary-btn">Continue</button>
      </header>

      <nav className="quick-nav" aria-label="Quick links">
        {quickLinks.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>

      <section className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="panel-grid">
        <div className="panel">
          <h2>Today’s Schedule</h2>
          <ul>
            <li>09:00 — Data Structures</li>
            <li>10:30 — Mathematics II</li>
            <li>13:00 — Library Session</li>
          </ul>
        </div>

        <div className="panel">
          <h2>Latest Notices</h2>
          <ul>
            <li>Mid-sem schedule released</li>
            <li>Innovation showcase registration open</li>
            <li>Library quiet-zone reminder</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
