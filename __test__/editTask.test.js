import editTask from "../src/module/editTask.js";

describe("editTask", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul id="items">
        <li class="item">
          <span class="item-text">Task </span>
          <span class="select-item">
            <i class="fas fa-grip-vertical"></i>
            <i class="fas fa-trash" style="display: none;"></i>
          </span>
        </li>
      </ul>
    `;
  });

  it("should update the task description correctly", () => {
    const text = document.createElement("span");
    const task = { desc: "Task" };
    const updatedText = "Updated Task";

    text.innerText = updatedText;
    editTask(text, task);

    expect(task.desc).toBe(updatedText);
  });

  it("should edit the task description in the DOM", () => {
    const textElement = document.querySelector(".item-text");
    const updatedText = "Updated Task";

    textElement.innerText = updatedText;
    const task = { desc: "Task" };
    editTask(textElement, task);

    expect(task.desc).toBe(updatedText);
    expect(textElement.innerText).toBe(updatedText);
  });
});
