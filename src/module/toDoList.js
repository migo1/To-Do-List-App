import toggleIcon from "./toggleIcon.js";

export default class ToDoList {
  constructor() {
    this.todoItems = [];
    this.items = document.getElementById("items");
    this.submitList();
    this.displayList();
  }

  store(toDoTask) {
    this.todoItems.push(toDoTask);
    localStorage.setItem("todoList", JSON.stringify(this.todoItems));
    this.displayList();
  }

  appendTodoItem(toDoTask) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.setAttribute("data-key", toDoTask.index);

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("check");
    if (toDoTask.completed === true) {
      checkbox.setAttribute("checked", "true");
    }

    const itemText = document.createElement("span");
    itemText.classList.add("item-text");
    itemText.innerText = toDoTask.desc;

    const selectItem = document.createElement("span");
    selectItem.classList.add("select-item");

    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-grip-vertical");
    selectItem.append(icon);

    itemText.addEventListener("click", () => {
      toggleIcon(icon);
      itemText.contentEditable = true;
      itemText.style.outline = "none";
      itemText.focus();

      if (icon.classList.contains("fa-trash")) {
        icon.addEventListener("click", (event) => {
          event.stopPropagation();
          const taskIndex = toDoTask.index;
          this.deleteTask(taskIndex);
        });
      }
    });

    itemText.addEventListener("focusout", () => {
      toggleIcon(icon);
      itemText.contentEditable = false;
      const newText = itemText.innerText.trim();
      toDoTask.desc = newText;
      localStorage.setItem("todoList", JSON.stringify(this.todoItems));
    });

    itemText.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        itemText.blur();
      }
    });

    listItem.append(checkbox, itemText, selectItem);

    const hr = document.createElement("hr");
    this.items.append(listItem, hr);
  }

  submitList() {
    const inputField = document.querySelector(".input-list");
    inputField.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        const desc = inputField.value.trim();
        if (desc !== "") {
          const newTodo = {
            desc,
            completed: false,
            index: this.todoItems.length + 1,
          };
          this.store(newTodo);
          inputField.value = "";
        }
      }
    });
  }

  deleteTask(taskIndex) {
    this.todoItems = this.todoItems.filter((task) => task.index !== taskIndex);
    this.todoItems.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem("todoList", JSON.stringify(this.todoItems));
    this.displayList();
  }

  displayList() {
    this.items.innerHTML = "";
    this.todoItems.forEach((toDoTask) => {
      this.appendTodoItem(toDoTask);
    });
  }
}
