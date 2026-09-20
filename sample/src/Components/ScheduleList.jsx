import "../styles/ScheduleList.css";

function ScheduleList({
  schedules,
  filter,
  setFilter,
  children,
}) {
  return (
    <section className="schedule-list-section" id="schedule">

      <div className="list-header">

        <div>
          <span className="section-number">02</span>

          <div>
            <h2>My Schedules</h2>
            <p>Manage your upcoming academic activities.</p>
          </div>
        </div>

        <div className="schedule-count">
          {schedules.length} Tasks
        </div>

      </div>

      <div className="filter-bar">

        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className={filter === "Activity" ? "active" : ""}
          onClick={() => setFilter("Activity")}
        >
          Activities
        </button>

        <button
          className={filter === "Assignment" ? "active" : ""}
          onClick={() => setFilter("Assignment")}
        >
          Assignments
        </button>

        <button
          className={filter === "Report" ? "active" : ""}
          onClick={() => setFilter("Report")}
        >
          Reports
        </button>

        <button
          className={filter === "Project" ? "active" : ""}
          onClick={() => setFilter("Project")}
        >
          Projects
        </button>

        <button
          className={filter === "Exam" ? "active" : ""}
          onClick={() => setFilter("Exam")}
        >
          Exams
        </button>

      </div>

      <div className="schedule-grid">

        {schedules.length > 0 ? (
          children
        ) : (
          <div className="empty-state">
            <div>📭</div>

            <h3>No schedules found</h3>

            <p>
              Create a new schedule to start organizing
              your academic tasks.
            </p>
          </div>
        )}

      </div>

    </section>
  );
}

export default ScheduleList;