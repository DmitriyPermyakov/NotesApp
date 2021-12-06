import  { taskDataServices } from "./task-data-services.js";

export default class TaskService {
    #taskView;

    constructor(taskView){
        this.#taskView = taskView;
    }

    async addTask(task) {
        return await taskDataServices.addTask(task);

    }

    getAllTasks() {
        let tasks =  taskDataServices.loadAllTasks();
        this.#taskView.drawAllTasks(JSON.parse(tasks));
    }

    delete(task) {
        taskDataServices.deleteTask(task.id)
    }
}