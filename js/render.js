function renderList() {
    const taskList = document.getElementById('task-list');
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
    console.log('List rendered successfully');
}


