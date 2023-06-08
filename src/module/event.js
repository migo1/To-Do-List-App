const checkboxChange = (toDoTask, checkbox, items, text) => {
  toDoTask.completed = checkbox.checked;
  localStorage.setItem("todoList", JSON.stringify(items));
  if (checkbox.checked) {
    text.style.textDecoration = "line-through";
  } else {
    text.style.textDecoration = "none";
  }
};

export default checkboxChange;
