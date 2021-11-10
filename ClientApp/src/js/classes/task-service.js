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
        let createdDbTask = dataServices.addTask(this.#task);
        this.#taskView.drawTask(createdDbTask);
    }
}