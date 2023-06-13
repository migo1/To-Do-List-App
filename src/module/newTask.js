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
  // if (newTask.completed === true) {
  //   checkbox.setAttribute("checked", "true");
  // }

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

  // itemText.addEventListener("click", () => {
  //   listItem.style.backgroundColor = "#fffeca";
  //   icon.style.display = "none";
  //   trashIcon.style.display = "block";
  //   itemText.contentEditable = true;
  //   itemText.style.outline = "none";
  //   itemText.focus();

  //   trashIcon.addEventListener("click", (event) => {
  //     event.stopPropagation();
  //     const taskIndex = newTask.index;
  //     this.deleteTask(taskIndex);
  //   });
  // });

  // itemText.addEventListener("keydown", (event) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     itemText.blur();
  //   }
  // });

  listItem.append(checkbox, itemText, selectItem);

  // listItem.addEventListener("focusout", () => {
  //   setTimeout(() => {
  //     listItem.style.backgroundColor = "#fff";
  //     itemText.contentEditable = false;
  //     const newText = itemText.innerText.trim();
  //     newTask.desc = newText;
  //     icon.style.display = "block";
  //     trashIcon.style.display = "none";
  //   }, 200);
  // });

  const hr = document.createElement("hr");
  items.append(listItem, hr);
}
