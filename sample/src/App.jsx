import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ScheduleForm from "./components/ScheduleForm";
import ScheduleList from "./components/ScheduleList";
import ScheduleCard from "./components/ScheduleCard";
import Toast from "./components/Toast";
import { loadSchedules, saveSchedules } from "./utils/storage";
import { sortSchedules } from "./utils/sortUtils";

const SAMPLE_SCHEDULES = [
  {
    id: 1,
    title: "React Activity",
    description: "Create a responsive React website.",
    category: "Activity",
    date: "2026-09-22",
    time: "09:00",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    title: "Information Management Report",
    description: "Prepare the presentation and report.",
    category: "Report",
    date: "2026-09-24",
    time: "13:00",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    title: "Programming Assignment",
    description: "Finish the programming exercises.",
    category: "Assignment",
    date: "2026-09-26",
    time: "15:30",
    priority: "Low",
    completed: false,
  },
];

function App() {
  const [schedules, setSchedules] = useState(() =>
    loadSchedules(SAMPLE_SCHEDULES)
  );
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date-asc");
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [toast, setToast] = useState({ message: "", type: "success" });

  useEffect(() => {
    saveSchedules(schedules);
  }, [schedules]);

  const showToast = (message, type = "success") =>
    setToast({ message, type });

  const addSchedule = (newSchedule) => {
    setSchedules((previous) => [
      ...previous,
      { ...newSchedule, id: Date.now(), completed: false },
    ]);
    showToast("Schedule created successfully.");
  };

  const updateSchedule = (updatedSchedule) => {
    setSchedules((previous) =>
      previous.map((schedule) =>
        schedule.id === updatedSchedule.id
          ? { ...schedule, ...updatedSchedule }
          : schedule
      )
    );
    setEditingSchedule(null);
    showToast("Schedule updated.");
  };

  const deleteSchedule = (id) => {
    setSchedules((previous) =>
      previous.filter((schedule) => schedule.id !== id)
    );
    showToast("Schedule deleted.", "info");
  };

  const toggleComplete = (id) => {
    setSchedules((previous) =>
      previous.map((schedule) =>
        schedule.id === id
          ? { ...schedule, completed: !schedule.completed }
          : schedule
      )
    );
  };

  const normalizedQuery = search.trim().toLowerCase();

  const filteredSchedules = schedules
    .filter((schedule) => filter === "All" || schedule.category === filter)
    .filter((schedule) => {
      if (!normalizedQuery) return true;
      return (
        schedule.title.toLowerCase().includes(normalizedQuery) ||
        (schedule.description || "").toLowerCase().includes(normalizedQuery) ||
        schedule.category.toLowerCase().includes(normalizedQuery)
      );
    });

  const visibleSchedules = sortSchedules(filteredSchedules, sortBy);

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Dashboard schedules={schedules} />

        <ScheduleForm
          onAddSchedule={addSchedule}
          editingSchedule={editingSchedule}
          onUpdateSchedule={updateSchedule}
          onCancelEdit={() => setEditingSchedule(null)}
        />

        <ScheduleList
          schedules={visibleSchedules}
          filter={filter}
          setFilter={setFilter}
          search={search}
          onSearchChange={setSearch}
          sortBy={sortBy}
          onSortChange={setSortBy}
        >
          {visibleSchedules.map((schedule) => (
            <ScheduleCard
              key={schedule.id}
              schedule={schedule}
              onDelete={deleteSchedule}
              onToggle={toggleComplete}
              onEdit={() => setEditingSchedule(schedule)}
            />
          ))}
        </ScheduleList>
      </main>

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "success" })}
      />
    </div>
  );
}

export default App;