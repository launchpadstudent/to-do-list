const tasks = loadTasks() || [];

function loadTasks() {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(task) {
    tasks.push({text: task, done: false});
    renderList();
}

function toggleComplete(index) {
    tasks[index].done = !tasks[index].done;
    renderList();
}

function updateTaskNumber() {
    let left = 0;
    let done = 0;
    tasks.forEach(task => {
        task.done ? done++ : left++;
    });
    document.getElementById('task-count').textContent = `Tasks left: ${left}, Tasks done: ${done}`;
}