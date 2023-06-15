export default function clearCompleted(tasks) {
  return tasks.filter((task) => !task.completed);
}
