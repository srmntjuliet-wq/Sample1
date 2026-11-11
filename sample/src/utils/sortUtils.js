const PRIORITY_WEIGHT = { High: 3, Medium: 2, Low: 1 };

export const SORT_OPTIONS = [
  { value: "date-asc", label: "Date (soonest)" },
  { value: "date-desc", label: "Date (latest)" },
  { value: "priority", label: "Priority (high → low)" },
  { value: "title", label: "Title (A → Z)" },
];

function toTimestamp(schedule) {
  const time = schedule.time || "00:00";
  const parsed = new Date(`${schedule.date}T${time}:00`).getTime();
  return Number.isFinite(parsed) ? parsed : 0;
}

export function sortSchedules(schedules, sortBy) {
  const copy = [...schedules];

  switch (sortBy) {
    case "date-desc":
      return copy.sort((a, b) => toTimestamp(b) - toTimestamp(a));
    case "priority":
      return copy.sort(
        (a, b) =>
          (PRIORITY_WEIGHT[b.priority] || 0) -
          (PRIORITY_WEIGHT[a.priority] || 0)
      );
    case "title":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case "date-asc":
    default:
      return copy.sort((a, b) => toTimestamp(a) - toTimestamp(b));
  }
}