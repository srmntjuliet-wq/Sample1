import "../styles/ScheduleCard.css";

function ScheduleCard({
  schedule,
  onDelete,
  onToggle,
}) {
  const formattedDate = new Date(
    schedule.date + "T00:00:00"
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article
      className={`schedule-card ${
        schedule.completed ? "completed-card" : ""
      }`}
    >

      <div className="card-top">

        <span className={`category ${schedule.category.toLowerCase()}`}>
          {schedule.category}
        </span>

        <span className={`priority ${schedule.priority.toLowerCase()}`}>
          {schedule.priority}
        </span>

      </div>

      <div className="card-content">

        <h3>{schedule.title}</h3>

        <p>
          {schedule.description ||
            "No description provided."}
        </p>

      </div>

      <div className="schedule-details">

        <div>
          <span>📅</span>
          {formattedDate}
        </div>

        <div>
          <span>⏰</span>
          {schedule.time}
        </div>

      </div>

      <div className="card-actions">

        <button
          className="complete-button"
          onClick={() => onToggle(schedule.id)}
        >
          {schedule.completed
            ? "↩ Undo"
            : "✓ Complete"}
        </button>

        <button
          className="delete-button"
          onClick={() => onDelete(schedule.id)}
        >
          🗑 Delete
        </button>

      </div>

    </article>
  );
}

export default ScheduleCard;