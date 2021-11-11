import  { dataServices } from "./data-services.js";

export default class TaskService {
    #taskView;

    constructor(taskView){
        this.#taskView = taskView;
    }

    addTask(task) {
        let createdDbTask = dataServices.addTask(task);
        this.#taskView.drawTask(createdDbTask);
    }
}