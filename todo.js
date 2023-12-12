// todo.js

function addTask() {
    // Get the task input
    var taskInput = document.getElementById('task');

    // Get the task list
    var todoList = document.getElementById('todo-list');

    // Create a new list item
    var newTask = document.createElement('li');
    newTask.textContent = taskInput.value;

    // Add the new task to the list
    todoList.appendChild(newTask);

    // Clear the task input
    taskInput.value = '';
}
