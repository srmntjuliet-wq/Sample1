import { useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ScheduleForm from "./components/ScheduleForm";
import ScheduleList from "./components/ScheduleList";
import ScheduleCard from "./components/ScheduleCard";

function App() {
  const [schedules, setSchedules] = useState([
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
  ]);

  const [filter, setFilter] = useState("All");

  const addSchedule = (newSchedule) => {
    setSchedules((previous) => [
      ...previous,
      {
        ...newSchedule,
        id: Date.now(),
        completed: false,
      },
    ]);
  };

  const deleteSchedule = (id) => {
    setSchedules((previous) =>
      previous.filter((schedule) => schedule.id !== id)
    );
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

  const filteredSchedules =
    filter === "All"
      ? schedules
      : schedules.filter((schedule) => schedule.category === filter);

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Dashboard schedules={schedules} />

        <ScheduleForm onAddSchedule={addSchedule} />

        <ScheduleList
          schedules={filteredSchedules}
          filter={filter}
          setFilter={setFilter}
        >
          {filteredSchedules.map((schedule) => (
            <ScheduleCard
              key={schedule.id}
              schedule={schedule}
              onDelete={deleteSchedule}
              onToggle={toggleComplete}
            />
          ))}
        </ScheduleList>
      </main>
    </div>
  );
}

export default App;