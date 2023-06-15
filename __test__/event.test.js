import checkboxChange from "../src/module/event.js";

describe("checkboxChange", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul id="items">
        <li class="item">
          <input type="checkbox" class="check">
          <span class="item-text">Task 1</span>
        </li>
      </ul>
    `;
  });

  it("should update the 'completed' status correctly", () => {
    // Arrange
    const checkbox = document.querySelector(".check");
    const text = document.querySelector(".item-text");
    const toDoTask = { completed: false };

    // Act
    checkbox.checked = true;
    checkboxChange(toDoTask, checkbox, text);

    // Assert
    expect(toDoTask.completed).toBe(true);
    expect(text.style.textDecoration).toBe("line-through");
  });

  it("should update the 'completed' status in the DOM", () => {
    // Arrange
    const checkbox = document.querySelector(".check");
    const text = document.querySelector(".item-text");
    const toDoTask = { completed: false };

    // Act
    checkbox.checked = true;
    checkboxChange(toDoTask, checkbox, text);

    // Assert
    expect(toDoTask.completed).toBe(true);
    expect(checkbox.checked).toBe(true);
    expect(text.style.textDecoration).toBe("line-through");
  });

  it("should update the 'textDecoration' in the DOM", () => {
    // Arrange
    const checkbox = document.querySelector(".check");
    const text = document.querySelector(".item-text");
    const toDoTask = { completed: true };

    // Act
    checkbox.checked = false;
    checkboxChange(toDoTask, checkbox, text);

    // Assert
    expect(toDoTask.completed).toBe(false);
    expect(checkbox.checked).toBe(false);
    expect(text.style.textDecoration).toBe("none");
  });
});
