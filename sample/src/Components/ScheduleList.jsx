import SearchBar from "./SearchBar";
import { SORT_OPTIONS } from "../utils/sortUtils";
import "../styles/ScheduleList.css";

const FILTERS = [
  { value: "All", label: "All" },
  { value: "Activity", label: "Activities" },
  { value: "Assignment", label: "Assignments" },
  { value: "Report", label: "Reports" },
  { value: "Project", label: "Projects" },
  { value: "Exam", label: "Exams" },
];

function ScheduleList({
  schedules,
  filter,
  setFilter,
  filterCounts = {},
  search,
  onSearchChange,
  sortBy,
  onSortChange,
  completedCount,
  onClearCompleted,
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

        <div className="list-header-actions">
          {completedCount > 0 && (
            <button
              type="button"
              className="clear-completed-btn"
              onClick={onClearCompleted}
            >
              🧹 Clear completed ({completedCount})
            </button>
          )}

          <div className="schedule-count">{schedules.length} Tasks</div>
        </div>
      </div>

      <div className="search-sort-row">
        <SearchBar
          value={search}
          onChange={onSearchChange}
          placeholder="Search by title, description or category..."
        />

        <select
          className="sort-select"
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
          aria-label="Sort schedules"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-bar">
        {FILTERS.map((item) => {
          const count = filterCounts[item.value] ?? 0;

          return (
            <button
              key={item.value}
              className={filter === item.value ? "active" : ""}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
              <span className="filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="schedule-grid">
        {schedules.length > 0 ? (
          children
        ) : (
          <div className="empty-state">
            <div>📭</div>

            <h3>No schedules found</h3>

            <p>
              Create a new schedule to start organizing your academic tasks.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ScheduleList;