let showFormButton = document.querySelector('#add-task-button').addEventListener('click', () => {
    document.querySelector('#tasks-list').classList.add('open-task-list');
} );

export default showFormButton;