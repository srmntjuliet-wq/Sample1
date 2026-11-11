const STORAGE_KEY = "schedulecraft.schedules";

export function loadSchedules(fallback = []) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch (error) {
    console.warn("Could not read schedules from storage:", error);
    return fallback;
  }
}

export function saveSchedules(schedules) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(schedules));
  } catch (error) {
    console.warn("Could not save schedules to storage:", error);
  }
}