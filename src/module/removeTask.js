export default function removeTask(todoItems, taskIndex) {
  const updatedTodoItems = todoItems.filter((task) => task.index !== taskIndex);
  updatedTodoItems.forEach((task, index) => {
    task.index = index + 1;
  });
  return updatedTodoItems;
}
