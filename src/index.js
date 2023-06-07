import "./style.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import ToDoList from "./module/toDoList.js";

const toDoList = new ToDoList();
if (localStorage.getItem("todoList")) {
  const lists = JSON.parse(localStorage.getItem("todoList"));
  lists.forEach((list) => {
    const addList = {
      desc: list.desc,
      completed: list.completed,
      index: list.index,
    };
    toDoList.store(addList);
  });
}
