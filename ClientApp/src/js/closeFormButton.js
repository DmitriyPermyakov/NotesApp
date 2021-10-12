let closeFormButton = document.querySelector('#close-form-button').addEventListener('click', () => {
    document.querySelector('#tasks-list').classList.remove('open-task-list');
} );

export default closeFormButton;