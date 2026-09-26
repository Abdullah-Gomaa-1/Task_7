let tasks = ["task 1", "task 2", "task 3"];

function displayTasks() {
    console.clear();
    tasks.forEach((task, i) => {
        console.log((i + 1) + " => " + task)
    })
}

function addTask() {
    let taskName = prompt("enter task name");
    tasks.push(taskName);
    displayTasks();
}

function deleteTask() {
    let selectedIndex = +prompt("enter task number to delete");
    tasks.splice(selectedIndex - 1, 1);
    displayTasks();
}

function updateTask() {
    let selectedIndex = +prompt("enter task number to update");
    let updateTaskName = prompt("enter task name to update");
    tasks.splice(selectedIndex - 1, 1, updateTaskName);
    displayTasks();
}