import dataServices from "./data-services";

export class TaskView {
    taskList;
    constructor(taskList) {
        this.taskList = taskList;
    }

    #createTaskItem() {
        let taskItem = document.createElement('task-item');

        let taskItemTitle = document.createElement('div');
        taskItemTitle.setAttribute('slot', 'title');
        taskItemTitle.textContent = this.task.title;

        let taskItemDescription = document.createElement('div');
        taskItemDescription.setAttribute('slot', 'description');
        taskItemDescription.textContent = this.task.description;

        taskItem.appendChild(taskItemTitle);
        taskItem.appendChild(taskItemDescription);

        taskList.appendChild(taskItem);
    }

    drawAllTasks(tasks) {
        this.taskList.innerHTML = "";

        if(tasks.length == 0) return;

        tasks.forEach(task => this.#createTaskItem(task));
    }

    drawTask(task) {
        this.#createTaskItem(task);
    }

}