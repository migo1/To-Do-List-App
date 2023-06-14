export default function removeTask(todoItems, taskIndex) {
  const listItem = document.querySelector(`li[data-key="${taskIndex}"]`);
  if (listItem) {
    listItem.remove();
  }
  const updatedTodoItems = todoItems.filter((task) => task.index !== taskIndex);
  updatedTodoItems.forEach((task, index) => {
    task.index = index + 1;
  });
  return updatedTodoItems;
}
