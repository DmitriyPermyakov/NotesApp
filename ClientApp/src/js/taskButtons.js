import { ButtonAnimation } from "./classes/button-animation.js";
import { addTaskBtn, clearFieldsBtn, closeFormBtn, taskList, titleInput, descriptionInput, dateFrom, dateTo, remindList, tagsList } from "./documentVariables.js";
import  TaskView  from "./classes/task-view.js";
import  TaskService  from "./classes/task-service.js";
import { Validation } from "./classes/validation.js";
import { Task } from "./classes/task.js";


const buttonAnimation = new ButtonAnimation(addTaskBtn, clearFieldsBtn, closeFormBtn);
const taskView = new TaskView(taskList);
const taskService = new TaskService(taskView);
const validator = new Validation(titleInput, descriptionInput, dateFrom, dateTo, remindList, tagsList);

addTaskBtn.addEventListener('click', openForm);
closeFormBtn.addEventListener('click', closeForm );
clearFieldsBtn.addEventListener('click', clearFormFields);

function openForm() {
    taskList.classList.add('open-task-list');
    buttonAnimation.openButtons();

    Promise.all(addTaskBtn.getAnimations().map(a => a.finished)).then(addTaskBtn.removeEventListener('click', openForm)).then(addTaskBtn.addEventListener('click', addTaskItem));
}

function closeForm() {
    taskList.classList.remove('open-task-list');
    buttonAnimation.closeButtons();
    addTaskBtn.removeEventListener('click', addTaskItem);
    addTaskBtn.addEventListener('click', openForm);
}

function addTaskItem() {
    if(validator.isAllFieldsValid) {
        let task = new Task(titleInput.value, descriptionInput.value, dateFrom.value, dateTo.value, remindList.value, tagsList.value);
        taskService.addTask(task);
        clearFormFields();
    }
    return;
}

function clearFormFields() {
    titleInput.value = '';
    descriptionInput.value = '';
    dateFrom.reset();
    dateTo.reset();
    remindList.value = 'never';
    tagsList.value = 'none';
}

export { addTaskBtn, clearFieldsBtn, closeFormBtn };