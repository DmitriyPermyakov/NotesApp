import  TaskForm  from "./task-form.js";
import { tagsList, titleInput, descriptionInput, dateFrom, dateTo, remindList } from "../documentVariables.js";
import  { dataServices } from "./data-services.js";

export default class TaskService {
    #form;
    #task;
    #taskView;

    constructor(taskView){
        this.#taskView = taskView;
    }

    addTask() {
        this.#form = new TaskForm(titleInput.value, descriptionInput.value, dateFrom.value, dateTo.value, remindList.value, tagsList.value);

        this.#task = this.#form.createTask();
        let createdDbTask = dataServices.addTask(this.#task);
        this.#taskView.drawTask(createdDbTask);
    }
}