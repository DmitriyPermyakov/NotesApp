import dataServices from "./data-services";
import { TaskView } from "./task-view";

export class TaskList {
    taskList;

    constructor(taskList) {
        this.taskList = taskList;
    }

    drawAllTasks() {
        let tasks = [];
        let taskElements = [];
        this.taskList.innerHTML = "";

        tasks = dataServices.loadAllTasks();
        if(tasks.length == 0) return;

        tasks.forEach(task => taskElements.push(new TaskView(task)));
        taskElements.forEach(elem => elem.drawTask(this.taskList));
    }

    drawTask(task) {
        new TaskView(task).drawTask(this.taskList);
    }

}