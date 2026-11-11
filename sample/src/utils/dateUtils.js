export function formatScheduleDate(date) {
  if (!date) return "No date";
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getDueStatus(schedule) {
  if (schedule.completed) {
    return { key: "completed", label: "Completed" };
  }

  if (!schedule.date) {
    return { key: "unscheduled", label: "No date" };
  }

  const now = new Date();
  const due = new Date(`${schedule.date}T${schedule.time || "23:59"}:00`);

  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  const startOfDue = new Date(
    due.getFullYear(),
    due.getMonth(),
    due.getDate()
  );
  const diffDays = Math.round(
    (startOfDue - startOfToday) / (1000 * 60 * 60 * 24)
  );

  if (diffDays < 0 || (diffDays === 0 && due < now)) {
    return { key: "overdue", label: "Overdue" };
  }
  if (diffDays === 0) return { key: "today", label: "Today" };
  if (diffDays === 1) return { key: "tomorrow", label: "Tomorrow" };
  if (diffDays <= 7) return { key: "week", label: "This week" };
  return { key: "upcoming", label: "Upcoming" };
}