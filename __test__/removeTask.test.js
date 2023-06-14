import removeTask from "../src/module/removeTask.js";

describe("removeTask", () => {
  let todoItems;
  beforeEach(() => {
  
    todoItems = [
      { index: 1, text: "Task 1" },
      { index: 2, text: "Task 2" },
      { index: 3, text: "Task 3" },
    ];
  });

  it("should remove the task from the todoItems array", () => {
    const taskIndex = 2; 
    const updatedTodoItems = removeTask(todoItems, taskIndex);


    expect(updatedTodoItems).toEqual([
      { index: 1, text: "Task 1" },
      { index: 2, text: "Task 3" },
    ]);
  });

  it("should remove the corresponding list item from the DOM", () => {
    
    document.body.innerHTML = `
      <ul>
        <li data-key="1">Task 1</li>
        <li data-key="2">Task 2</li>
        <li data-key="3">Task 3</li>
      </ul>
    `;

    const taskIndex = 2; 
    removeTask(todoItems, taskIndex);

    const listItem = document.querySelector(`li[data-key="${taskIndex}"]`);
    expect(listItem).toBeNull();
  });

  it("should update the index of remaining tasks in the todoItems array", () => {
    const taskIndex = 1; 
    const updatedTodoItems = removeTask(todoItems, taskIndex);

    expect(updatedTodoItems[0].index).toBe(1);
    expect(updatedTodoItems[1].index).toBe(2);
  });

  it("should return the updated todoItems array", () => {
    const taskIndex = 2; 
    const updatedTodoItems = removeTask(todoItems, taskIndex);

    expect(updatedTodoItems).toBeInstanceOf(Array);
  });
});
