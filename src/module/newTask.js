export default function newTask(desc, todoList) {
  const newTask = {
    desc,
    completed: false,
    index: todoList.length + 1,
  };

  todoList.push(newTask);
}
