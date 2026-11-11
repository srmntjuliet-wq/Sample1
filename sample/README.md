# ScheduleCraft — Smart Academic Planner

A React + Vite planner for students: track activities, assignments, reports,
projects, and exams in one place, with category filters, sorting, search,
due-status badges, edit/delete, completion progress, and local persistence.

## Features

- 🗂️ **Create / edit / delete** schedules (title, description, category, date, time, priority)
- 🔎 **Search** across title, description and category
- 🧭 **Filter** by category with live count badges
- ↕ **Sort** by date (soonest/latest), priority, or title
- ⏰ **Due status badges** — Overdue / Today / Tomorrow / This week / Upcoming
- 📊 **Dashboard** — total, pending, completed, high-priority, overdue + completion %
- 🧹 **Clear completed** with a single click
- 💾 **localStorage persistence** — your planner survives refreshes
- 🔔 **Toast notifications** for every action
- 📱 Fully **responsive** layout

## Stack

- React 18 + Vite
- Plain CSS (pink gradient design system)
- No external UI libraries

## Getting started

```bash
npm install
npm run dev