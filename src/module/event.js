const checkboxChange = (toDoTask, checkbox, text) => {
  toDoTask.completed = checkbox.checked;
  if (checkbox.checked) {
    text.style.textDecoration = "line-through";
  } else {
    text.style.textDecoration = "none";
  }
};

export default checkboxChange;
