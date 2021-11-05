const addTaskBtn = document.querySelector('#add-task-button');
const clearFieldsBtn = document.querySelector('#clear-field-button');
const closeFormBtn = document.querySelector('#close-form-button');

const taskList = document.querySelector('#tasks-list');

const taskForm = document.forms.taskForm;
const titleInput = taskForm.elements.titleInput;
const descriptionInput = taskForm.elements.descriptionInput;
const dateFrom = taskForm.querySelector('#date-from');
const dateTo = taskForm.querySelector('#date-to');
const remindList = taskForm.elements.remindList;
const tagsList = taskForm.elements.formTagsList;


export { addTaskBtn, clearFieldsBtn, closeFormBtn, tagsList, taskList, titleInput, descriptionInput, dateFrom, dateTo, remindList };
