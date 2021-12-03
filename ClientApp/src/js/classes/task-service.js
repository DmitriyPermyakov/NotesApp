import  { taskDataServices } from "./task-data-services.js";

export default class TaskService {
    #taskView;

    constructor(taskView){
        this.#taskView = taskView;
    }

    addTask(task) {
        let createdDbTask = taskDataServices.addTask(task);
        this.#taskView.drawTask(JSON.parse(createdDbTask));
    }

    getAllTasks() {
        let tasks =  taskDataServices.loadAllTasks();
        this.#taskView.drawAllTasks(JSON.parse(tasks));
    }

    delete(task) {
        taskDataServices.deleteTask(task.id)
    }
}