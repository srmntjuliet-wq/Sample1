import { useState } from "react";
import "../styles/ScheduleForm.css";

function ScheduleForm({ onAddSchedule }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Activity");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !date || !time) {
      alert("Please complete the title, date, and time.");
      return;
    }

    onAddSchedule({
      title,
      description,
      category,
      date,
      time,
      priority,
    });

    setTitle("");
    setDescription("");
    setCategory("Activity");
    setDate("");
    setTime("");
    setPriority("Medium");
  };

  return (
    <section className="schedule-form-section" id="create">

      <div className="section-title">
        <div>
          <span className="section-number">01</span>

          <div>
            <h2>Create New Schedule</h2>
            <p>Add a new school task to your planner.</p>
          </div>
        </div>
      </div>

      <form className="schedule-form" onSubmit={handleSubmit}>

        <div className="form-group full-width">
          <label>Task Title</label>

          <input
            type="text"
            placeholder="Example: Java Programming Activity"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group full-width">
          <label>Description</label>

          <textarea
            placeholder="Write a short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Activity</option>
            <option>Assignment</option>
            <option>Report</option>
            <option>Project</option>
            <option>Exam</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Priority</label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date</label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Time</label>

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <button className="create-button" type="submit">
          <span>＋</span>
          Create Schedule
        </button>

      </form>
    </section>
  );
}

export default ScheduleForm;