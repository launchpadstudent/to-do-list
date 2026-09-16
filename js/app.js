renderList();

document.querySelector('button').addEventListener('click', () => {
    const input = document.querySelector('input');
    addTask(input.value);
    input.value = ''; // Clear the input field
})