import newTask from "../src/module/newTask.js";

describe("newTask", () => {
  let todoList;

  beforeEach(() => {
    todoList = [];
  });

  it("should add a new task to the todoList array", () => {
    // Arrange
    const desc = "study react";

    // Act
    newTask(desc, todoList);

    // Assert
    expect(todoList.length).toBe(1);
    expect(todoList[0].desc).toBe(desc);
    expect(todoList[0].completed).toBe(false);
    expect(todoList[0].index).toBe(1);
  });

  it("should increment the index for each new task", () => {
    // Arrange
    const desc1 = "refactor code";
    const desc2 = "test code";

    // Act
    newTask(desc1, todoList);
    newTask(desc2, todoList);

    // Assert
    expect(todoList.length).toBe(2);
    expect(todoList[0].index).toBe(1);
    expect(todoList[1].index).toBe(2);
  });
});
