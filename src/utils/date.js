export function isTaskOverdue(task, now = new Date()) {
  if (!task.dueDate || task.isCompleted) return false;
  const due =
    task.dueDate instanceof Date ? task.dueDate : new Date(task.dueDate);

  return now > due;
}

export function isTaskArchived(task, days = 7) {
  if (!task.isCompleted || !task.completedAt) return false;

  const completedDate = new Date(task.completedAt);
  const now = new Date();

  const diffInMs = now - completedDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return diffInDays >= days;
}
