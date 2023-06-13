import newTask from "../src/module/newTask.js";

describe("newTask", () => {
  let todoList;
  let items;

  beforeEach(() => {
    todoList = [];
    items = document.createElement("div");
    items.id = "items";
    document.body.appendChild(items);
  });

  afterEach(() => {
    document.body.removeChild(items);
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

  it("should add a new task as an <li> element to the DOM", () => {
    // Arrange
    const desc = "study react";

    // Act
    newTask(desc, todoList);

    // Assert
    expect(todoList.length).toBe(1);

    const listItem = items.querySelector("li");
    expect(listItem).not.toBeNull();
    expect(listItem.classList.contains("item")).toBe(true);
    expect(listItem.getAttribute("data-key")).toBe("1");

    const checkbox = listItem.querySelector("input[type='checkbox']");
    expect(checkbox).not.toBeNull();
    expect(checkbox.classList.contains("check")).toBe(true);
    expect(checkbox.checked).toBe(false);

    const itemText = listItem.querySelector(".item-text");
    expect(itemText).not.toBeNull();
    expect(itemText.innerText).toBe(desc);

    const selectItem = listItem.querySelector(".select-item");
    expect(selectItem).not.toBeNull();

    const icon = selectItem.querySelector(".fas.fa-grip-vertical");
    expect(icon).not.toBeNull();

    const trashIcon = selectItem.querySelector(".fas.fa-trash");
    expect(trashIcon).not.toBeNull();
    expect(trashIcon.style.display).toBe("none");

    const hr = items.querySelector("hr");
    expect(hr).not.toBeNull();
  });
});
