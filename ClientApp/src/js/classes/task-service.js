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

    getAllTasks() {
        dataServices.loadAllTasks();
        this.#taskView.drawAllTasks(dataServices.tasks);
    }

    delete(task) {
        dataServices.deleteTask(task.id)
    }
}