import { isTaskOverdue, isTaskArchived } from "./date";

export function getFilteredTasks(tasks, filter) {
  const visibleTasks = tasks.filter((t) => !isTaskArchived(t));

  switch (filter) {
    case "pending":
      return visibleTasks.filter((t) => !t.isCompleted && !isTaskOverdue(t));

    case "overdue":
      return visibleTasks.filter((t) => !t.isCompleted && isTaskOverdue(t));

    case "completed":
      return visibleTasks.filter((t) => t.isCompleted);

    case "all":
    default:
      return visibleTasks.filter((t) => !t.isCompleted);
  }
}
