const checkboxChange = (toDoTask, checkbox, items) => {
  toDoTask.completed = checkbox.checked;
  localStorage.setItem("todoList", JSON.stringify(items));
};

export default checkboxChange;