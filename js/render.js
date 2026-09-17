function renderList() {
    const taskList = document.getElementById('task-list');
    console.log('taskList', taskList);
    taskList.innerHTML = ''; // Clear existing list items
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;
        listItem.classList.toggle('done', task.done);
        listItem.addEventListener('click', () => {
            toggleComplete(index);
        });
        taskList.appendChild(listItem);
    });
    updateTaskNumber();
    saveTasks();
}



