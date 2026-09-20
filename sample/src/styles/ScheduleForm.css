import "../styles/Dashboard.css";

function Dashboard({ schedules }) {
  const total = schedules.length;

  const completed = schedules.filter(
    (schedule) => schedule.completed
  ).length;

  const pending = schedules.filter(
    (schedule) => !schedule.completed
  ).length;

  const highPriority = schedules.filter(
    (schedule) => schedule.priority === "High"
  ).length;

  return (
    <section className="dashboard" id="dashboard">

      <div className="dashboard-heading">
        <div>
          <span className="small-label">MY ACADEMIC PLANNER</span>

          <h2>
            Plan it.
            <span> Schedule it.</span>
            <br />
            Finish it.
          </h2>

          <p>
            Organize your activities, assignments, reports,
            projects, and other school tasks in one place.
          </p>
        </div>

        <div className="calendar-icon">
          📅
        </div>
      </div>

      <div className="stats-grid">

        <div className="stat-card blue-card">
          <div className="stat-icon">📋</div>

          <div>
            <span>Total Tasks</span>
            <strong>{total}</strong>
          </div>
        </div>

        <div className="stat-card pink-card">
          <div className="stat-icon">⏳</div>

          <div>
            <span>Pending</span>
            <strong>{pending}</strong>
          </div>
        </div>

        <div className="stat-card purple-card">
          <div className="stat-icon">✓</div>

          <div>
            <span>Completed</span>
            <strong>{completed}</strong>
          </div>
        </div>

        <div className="stat-card orange-card">
          <div className="stat-icon">🔥</div>

          <div>
            <span>High Priority</span>
            <strong>{highPriority}</strong>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Dashboard;