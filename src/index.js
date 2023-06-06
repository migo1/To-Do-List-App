import "./style.css";

const toDoTasks = [
  {
    desc: "Learn Webpack",
    completed: true,
    index: 0,
  },
  {
    desc: "Learn React",
    completed: false,
    index: 1,
  },
  {
    desc: "Learn Redux",
    completed: false,
    index: 2,
  },
  {
    desc: "Learn React Router",
    completed: false,
    index: 3,
  },
];

const items = document.getElementById("items");

const createToDoItem = (toDoTask) => {
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
  icon.classList.add("icon", "fas", "fa-grip-vertical");
  selectItem.append(icon);

  listItem.append(checkbox, itemText, selectItem);

  const hr = document.createElement("hr");
  items.append(listItem, hr);
};

for (let i = 0; i < toDoTasks.length; i += 1) {
  createToDoItem(toDoTasks[i]);
}