// Sample task data
let tasks = [
    { projectName: "Khan IT", task: "Guest Post Publish", priority: "High", condition: "Finished", responsiblePerson: "Rifat", dueDate: "Continuous" },
    { projectName: "Khan IT", task: "Blog Post Publish", priority: "High", condition: "Finished", responsiblePerson: "Rifat", dueDate: "Continuous" },
    // Add more tasks here
];

// Function to populate the task table
function populateTasks() {
    const table = document.getElementById("taskTable");
    tasks.forEach((task, index) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${task.projectName}</td>
            <td>${task.task}</td>
            <td>${task.priority}</td>
            <td>${task.condition}</td>
            <td>${task.responsiblePerson}</td>
            <td>${task.dueDate}</td>
            <td><button onclick="removeSpecificTask(${index})">Delete</button></td>
        `;
    });
}

// Function to add a new task
function addTask() {
    const projectNameInput = document.getElementById("projectName").value;
    const taskInput = document.getElementById("task").value;
    const priorityInput = document.getElementById("priority").value;
    const conditionInput = document.getElementById("condition").value;
    const responsiblePersonInput = document.getElementById("responsiblePerson").value;
    const dueDateInput = document.getElementById("dueDate").value;

    const newTask = {
        projectName: projectNameInput,
        task: taskInput,
        priority: priorityInput,
        condition: conditionInput,
        responsiblePerson: responsiblePersonInput,
        dueDate: dueDateInput
    };
    tasks.push(newTask);
    clearTable();
    populateTasks();
}

// Function to remove a specific task by index
function removeSpecificTask(index) {
    tasks.splice(index, 1);
    clearTable();
    populateTasks();
}

// Function to remove the last task
function removeTask() {
    if (tasks.length === 0) {
        alert("No tasks to remove!");
        return;
    }
    tasks.pop();
    clearTable();
    populateTasks();
}

// Function to clear the task table
function clearTable() {
    const table = document.getElementById("taskTable");
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}

// Call the function to populate tasks when the page loads
window.onload = populateTasks;
