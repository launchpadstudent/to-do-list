const tasks = [];

function addTask(task) {
    tasks.push({text: task, done: false});
    renderList();
}

function toggleComplete(index) {
    tasks[index].done = !tasks[index].done;
    renderList();
}