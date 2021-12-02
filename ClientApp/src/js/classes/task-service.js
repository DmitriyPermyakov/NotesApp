import  { dataServices } from "./data-services.js";

export default class TaskService {
    #taskView;

    constructor(taskView){
        this.#taskView = taskView;
    }

    addTask(task) {
        let createdDbTask = dataServices.addTask(task);
        this.#taskView.drawTask(JSON.parse(createdDbTask));
    }

    getAllTasks() {
        let tasks =  dataServices.loadAllTasks();
        this.#taskView.drawAllTasks(JSON.parse(tasks));
    }

    delete(task) {
        dataServices.deleteTask(task.id)
    }
}