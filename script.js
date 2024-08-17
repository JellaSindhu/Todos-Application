let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [
    { text: "Learn HTML" },
    { text: "Learn CSS" },
    { text: "Learn JavaScript" }
];

function createAndAppendTodo(todo) {
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput" + Math.random().toString(36).substring(2, 15); // Unique ID
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", inputElement.id); // Match the unique ID
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.style.cursor = "pointer";
    deleteIconContainer.appendChild(deleteIcon);

    inputElement.onclick = function() {
        labelElement.classList.toggle("line-through");
    }

    deleteIcon.onclick = function() {
        todoItemsContainer.removeChild(todoElement); // Remove the entire todo item
    }
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function addButton() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter a valid text");
        return;
    }
    let newTodo = {
        text: userInputValue
    };
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}
