import checkboxChange from "./event.js";
import newTask from "./newTask.js";
import removeTask from "./removeTask.js";
import editTask from "./editTask.js";
import clearCompleted from "./clearCompleted.js";

export default class ToDoList {
  constructor() {
    this.todoItems = [];
    this.items = document.getElementById("items");
    this.submitList();
    this.displayList();

    this.clearButton = document.getElementById("clear");
    this.clearButton.addEventListener("click", () => {
      this.clearCompletedTasks();
    });
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
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    trashIcon.style.display = "none";
    selectItem.append(icon, trashIcon);

    checkbox.addEventListener("change", () => {
      checkboxChange(toDoTask, checkbox, itemText);
      localStorage.setItem("todoList", JSON.stringify(this.todoItems));
    });

    itemText.addEventListener("click", () => {
      listItem.style.backgroundColor = "#fffeca";
      icon.style.display = "none";
      trashIcon.style.display = "block";
      itemText.contentEditable = true;
      itemText.style.outline = "none";
      itemText.focus();

      trashIcon.addEventListener("click", (event) => {
        event.stopPropagation();
        const taskIndex = toDoTask.index;
        this.deleteTask(taskIndex);
      });
    });

    itemText.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        itemText.blur();
      }
    });

    listItem.append(checkbox, itemText, selectItem);

    listItem.addEventListener("focusout", () => {
      setTimeout(() => {
        listItem.style.backgroundColor = "#fff";
        editTask(itemText, toDoTask);
        localStorage.setItem("todoList", JSON.stringify(this.todoItems));
        icon.style.display = "block";
        trashIcon.style.display = "none";
      }, 200);
    });

    const hr = document.createElement("hr");
    this.items.append(listItem, hr);
  }

  submitList() {
    const inputField = document.querySelector(".input-list");
    inputField.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        const desc = inputField.value.trim();
        if (desc !== "") {
          newTask(desc, this.todoItems);
          localStorage.setItem("todoList", JSON.stringify(this.todoItems));

          this.displayList();
          inputField.value = "";
        }
      }
    });
  }

  deleteTask(taskIndex) {
    this.todoItems = removeTask(this.todoItems, taskIndex);
    localStorage.setItem("todoList", JSON.stringify(this.todoItems));
    this.displayList();
  }

  displayList() {
    this.items.innerHTML = "";
    this.todoItems.forEach((toDoTask) => {
      this.appendTodoItem(toDoTask);
    });
  }

  clearCompletedTasks() {
    this.todoItems = clearCompleted(this.todoItems);
    this.todoItems.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem("todoList", JSON.stringify(this.todoItems));
    this.displayList();
  }
}
