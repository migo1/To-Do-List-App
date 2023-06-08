const checkboxChange = (toDoTask, checkbox, items, text) => {
  toDoTask.completed = checkbox.checked;
  localStorage.setItem("todoList", JSON.stringify(items));
  if (checkbox.checked) {
    text.style.textDecoration = "line-through";
    // icon.style.display = "block";
    // trashIcon.style.display = "none";
  } else {
    text.style.textDecoration = "none";
    // trashIcon.style.display = "block";
    // icon.style.display = "none";
  }
};

export const clearCompletedTasks = (tasks, toDo) => {
  tasks = tasks.filter((task) => !task.completed);
  localStorage.setItem("todoList", JSON.stringify(tasks));
  toDo.displayList();
};

// ...existing code...

// const initializeClearButton = () => {
//   const clearButton = document.getElementById("clear");
//   clearButton.addEventListener("click", clearCompletedTasks);
// };

export default checkboxChange;
