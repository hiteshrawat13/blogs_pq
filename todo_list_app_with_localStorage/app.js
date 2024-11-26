let tasks = [];

// Load tasks from localStorage when the page loads
window.onload = () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = savedTasks;
    renderTasks();
};

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    const task = { name: taskName, completed: false };
    tasks.push(task);
    taskInput.value = "";

    saveTasks();
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.name;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleTaskCompletion(index);
        taskItem.prepend(checkbox);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Delete';
        removeButton.onclick = () => removeTask(index);
        taskItem.appendChild(removeButton);

        if (task.completed) {
            taskItem.classList.add('completed');
        }

        taskList.appendChild(taskItem);
    });
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    renderTasks();
}
