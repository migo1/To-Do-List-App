import removeTask from "../src/module/removeTask.js";

describe("removeTask", () => {
  it("should update task indexes correctly", () => {
    // Arrange
    const todoItems = [
      { index: 1, desc: "Task 1", completed: false },
      { index: 2, desc: "Task 2", completed: true },
      { index: 3, desc: "Task 3", completed: false },
    ];
    const taskIndex = 2;

    // Act
    const updatedTodoItems = removeTask(todoItems, taskIndex);

    // Assert
    expect(updatedTodoItems.length).toBe(2);
    expect(updatedTodoItems[0].index).toBe(1);
    expect(updatedTodoItems[1].index).toBe(2);
  });
});
