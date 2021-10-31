import { ButtonAnimation } from "./classes/button-animation.js";

const addTaskBtn = document.querySelector('#add-task-button');
const clearFieldsBtn = document.querySelector('#clear-field-button');
const closeFormBtn = document.querySelector('#close-form-button');

const taskList = document.querySelector('#tasks-list');
const taskItem = document.querySelector('#task-item');

const buttonAnimation = new ButtonAnimation(addTaskBtn, clearFieldsBtn, closeFormBtn);

addTaskBtn.addEventListener('click', openForm);
closeFormBtn.addEventListener('click', closeForm )

function openForm() {
    taskList.classList.add('open-task-list');
    buttonAnimation.openButtons();

    Promise.all(addTaskBtn.getAnimations().map(a => a.finished)).then(addTaskBtn.removeEventListener('click', openForm)).then(addTaskBtn.addEventListener('click', addTaskItem));
}

function closeForm() {
    taskList.classList.remove('open-task-list');
    buttonAnimation.closeButtons();
    addTaskBtn.addEventListener('click', openForm);
}

function addTaskItem() {

}

export { addTaskBtn, clearFieldsBtn, closeFormBtn }