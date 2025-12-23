import { isTaskOverdue, isTaskArchived } from "./date";

export function getTaskStats(tasks) {
  const activeTasks = tasks.filter((t) => !isTaskArchived(t));

  let completed = 0;
  let overdue = 0;
  let pending = 0;

  activeTasks.forEach((t) => {
    if (t.isCompleted) completed++;
    else if (isTaskOverdue(t)) overdue++;
    else pending++;
  });

  return {
    total: activeTasks.length,
    completed,
    overdue,
    pending,
  };
}

export function getTaskCategory(tasks) {
  const personal = tasks.filter((t) => t.category === "personal").length;
  const trabajo = tasks.filter((t) => t.category === "trabajo").length;
  const estudios = tasks.filter((t) => t.category === "estudios").length;
  const salud = tasks.filter((t) => t.category === "salud").length;
  const hogar = tasks.filter((t) => t.category === "hogar").length;
  const otros = tasks.filter((t) => t.category === "otros").length;

  return {
    personal,
    trabajo,
    estudios,
    salud,
    hogar,
    otros,
  };
}

export function getTasksCompletedPerDay(tasks) {
  const weekdays = {
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
  };

  tasks.forEach((t) => {
    if (!t.isCompleted || !t.completedAt) return null;

    const day = new Date(t.completedAt).getDay();

    switch (day) {
      case 1:
        weekdays.mon++;
        break;
      case 2:
        weekdays.tue++;
        break;
      case 3:
        weekdays.wed++;
        break;
      case 4:
        weekdays.thu++;
        break;
      case 5:
        weekdays.fri++;
        break;
      case 6:
        weekdays.sat++;
        break;
      case 0: // domingo
        weekdays.sun++;
        break;
    }
  });

  return weekdays;
}
