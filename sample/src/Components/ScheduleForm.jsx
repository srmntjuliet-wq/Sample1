import { useEffect, useState } from "react";
import "../styles/ScheduleForm.css";

const EMPTY_FORM = {
  title: "",
  description: "",
  category: "Activity",
  date: "",
  time: "",
  priority: "Medium",
};

function ScheduleForm({
  onAddSchedule,
  editingSchedule,
  onUpdateSchedule,
  onCancelEdit,
}) {
  const [form, setForm] = useState(EMPTY_FORM);

  const isEditing = Boolean(editingSchedule);

  useEffect(() => {
    if (editingSchedule) {
      setForm({
        title: editingSchedule.title,
        description: editingSchedule.description || "",
        category: editingSchedule.category,
        date: editingSchedule.date,
        time: editingSchedule.time,
        priority: editingSchedule.priority,
      });
    } else {
      setForm(EMPTY_FORM);
    }
  }, [editingSchedule]);

  const setField = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title || !form.date || !form.time) {
      alert("Please complete the title, date, and time.");
      return;
    }

    if (isEditing) {
      onUpdateSchedule({
        ...editingSchedule,
        ...form,
      });
    } else {
      onAddSchedule(form);
    }

    setForm(EMPTY_FORM);
  };

  const handleCancel = () => {
    setForm(EMPTY_FORM);
    if (onCancelEdit) onCancelEdit();
  };

  return (
    <section className="schedule-form-section" id="create">
      <div className="section-title">
        <div>
          <span className="section-number">01</span>

          <div>
            <h2>{isEditing ? "Edit Schedule" : "Create New Schedule"}</h2>
            <p>
              {isEditing
                ? `Updating "${editingSchedule.title}"`
                : "Add a new school task to your planner."}
            </p>
          </div>
        </div>
      </div>

      <form className="schedule-form" onSubmit={handleSubmit}>
        <div className="form-group full-width">
          <label>Task Title</label>

          <input
            type="text"
            placeholder="Example: Java Programming Activity"
            value={form.title}
            onChange={(e) => setField("title", e.target.value)}
          />
        </div>

        <div className="form-group full-width">
          <label>Description</label>

          <textarea
            placeholder="Write a short description..."
            value={form.description}
            onChange={(e) => setField("description", e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Category</label>

          <select
            value={form.category}
            onChange={(e) => setField("category", e.target.value)}
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
            value={form.priority}
            onChange={(e) => setField("priority", e.target.value)}
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
            value={form.date}
            onChange={(e) => setField("date", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Time</label>

          <input
            type="time"
            value={form.time}
            onChange={(e) => setField("time", e.target.value)}
          />
        </div>

        <div className="form-actions full-width">
          <button className="create-button" type="submit">
            <span>{isEditing ? "✎" : "＋"}</span>
            {isEditing ? "Save Changes" : "Create Schedule"}
          </button>

          {isEditing && (
            <button
              className="cancel-button"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default ScheduleForm;