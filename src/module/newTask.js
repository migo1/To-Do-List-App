export default function newTask(desc, todoList) {
  const items = document.getElementById("items");

  const newTask = {
    desc,
    completed: false,
    index: todoList.length + 1,
  };

  todoList.push(newTask);
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.setAttribute("data-key", newTask.index);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("check");

  const itemText = document.createElement("span");
  itemText.classList.add("item-text");
  itemText.innerText = newTask.desc;

  const selectItem = document.createElement("span");
  selectItem.classList.add("select-item");

  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-grip-vertical");
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fas", "fa-trash");
  trashIcon.style.display = "none";
  selectItem.append(icon, trashIcon);

  listItem.append(checkbox, itemText, selectItem);

  const hr = document.createElement("hr");
  items.append(listItem, hr);
}
