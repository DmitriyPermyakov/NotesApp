

const taskForm = document.forms.taskForm;
const titleInput = taskForm.elements.titleInput;
const descriptionInput = taskForm.elements.descriptionInput;
const dateFrom = taskForm.querySelector('#date-from');
const dateTo = taskForm.querySelector('#date-to');
const remindList = taskForm.elements.remindList;
const tagsList = taskForm.elements.formTagsList;


export { tagsList, titleInput, descriptionInput, dateFrom, dateTo, remindList };
