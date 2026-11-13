import Link from "next/link";

const stats = [
  { label: "Current streak", value: "12 days" },
  { label: "Solved problems", value: "24" },
  { label: "Avg. accuracy", value: "87%" },
  { label: "Focus time", value: "4.6h" },
];

const learningPaths = [
  { name: "Arrays & Strings", progress: 76, color: "var(--accent)" },
  { name: "Graphs", progress: 52, color: "#8CC7FF" },
  { name: "Dynamic Programming", progress: 31, color: "#F7C66A" },
];

const upcomingTasks = [
  "Binary Search walkthrough",
  "Two-pointer interview practice",
  "Tree traversal visualizer",
];

const activity = [
  { title: "Completed recursion drill", time: "2h ago" },
  { title: "Reviewed graph BFS notes", time: "Today" },
  { title: "Started arrays practice set", time: "Yesterday" },
];

export default function DashboardPage() {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="brand-mark">O</span>
          <span>OpenFlow</span>
        </div>

        <nav className="sidebar-nav" aria-label="Dashboard navigation">
          <a className="nav-item active" href="#">Overview</a>
          <a className="nav-item" href="#">Learning paths</a>
          <a className="nav-item" href="#">Visualizers</a>
          <a className="nav-item" href="#">Practice</a>
          <a className="nav-item" href="#">Analytics</a>
        </nav>

        <div className="sidebar-card">
          <p>Next milestone</p>
          <strong>DSA core track</strong>
          <span>3 tasks left this week</span>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-eyebrow">Welcome back</p>
            <h1>Growth dashboard</h1>
          </div>
          <Link className="button button-primary dashboard-button" href="/">
            Back to home
          </Link>
        </header>

        <section className="stats-grid" aria-label="Learning stats overview">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel panel-wide">
            <div className="panel-header">
              <h2>Current learning path</h2>
              <span>72% complete</span>
            </div>

            <div className="path-list">
              {learningPaths.map((path) => (
                <div key={path.name} className="path-row">
                  <div className="path-meta">
                    <span>{path.name}</span>
                    <strong>{path.progress}%</strong>
                  </div>
                  <div className="progress-bar" aria-label={`${path.name} progress`}>
                    <span style={{ width: `${path.progress}%`, background: path.color }} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-header">
              <h2>Upcoming</h2>
              <span>Today</span>
            </div>

            <ul className="task-list">
              {upcomingTasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="bottom-grid">
          <article className="panel">
            <div className="panel-header">
              <h2>Recent activity</h2>
              <span>Updated</span>
            </div>

            <ul className="activity-list">
              {activity.map((item) => (
                <li key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                  </div>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="panel panel-highlight">
            <p className="highlight-label">Focus goal</p>
            <h3>Finish the sorting module</h3>
            <p>
              Complete the core algorithm walkthrough and compare performance trade-offs.
            </p>
            <Link className="button button-primary" href="/">
              Resume learning
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
}
