import clearCompleted from "../src/module/clearCompleted.js";

describe("clearCompleted", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul id="items">
        <li class="item">
          <input type="checkbox" class="check" checked />
          <span class="item-text">Task 1</span>
        </li>
        <li class="item">
          <input type="checkbox" class="check" />
          <span class="item-text">Task 2</span>
        </li>
        <li class="item">
          <input type="checkbox" class="check" checked />
          <span class="item-text">Task 3</span>
        </li>
      </ul>
    `;
  });

  it("should remove completed tasks from the list", () => {
    // Arrange
    const tasks = [
      { desc: "Task 1", completed: true },
      { desc: "Task 2", completed: false },
      { desc: "Task 3", completed: true },
    ];

    // Act
    const updatedTasks = clearCompleted(tasks);

    // Assert
    expect(updatedTasks.length).toBe(1);
    expect(updatedTasks[0].desc).toBe("Task 2");
    expect(updatedTasks[0].completed).toBe(false);
  });
});
