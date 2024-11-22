let tasks = [];


function addTask() {
    // Get the value from the input box
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();  // Remove any extra spaces

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task with a name and set it as not done
    const task = {
        name: taskName,
        completed: false
    };

    // Add the new task to the tasks array
    tasks.push(task);
    taskInput.value = "";  // Clear the input field

    // Re-render the list of tasks
    renderTasks();
}



function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";  // Clear the list before adding new tasks

    // Go through each task and create a list item
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.name;  // Show the task name

        // Add a checkbox to mark the task as completed
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleTaskCompletion(index);  // Mark task as completed

        taskItem.prepend(checkbox);  // Add the checkbox to the task item

        // Add a button to delete the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Delete';
        removeButton.onclick = () => removeTask(index);  // Delete the task

        taskItem.appendChild(removeButton);  // Add the delete button to the task item

        // Add the task item to the list
        taskList.appendChild(taskItem);
    });
}


function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;  // Flip the 'completed' status
    renderTasks();  // Re-render the list to show the change
}


function removeTask(index) {
    tasks.splice(index, 1);  // Remove the task from the array at the given index
    renderTasks();  // Re-render the list to update the view
}
