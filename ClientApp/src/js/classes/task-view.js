import  TaskItem  from '../components/task-item-component.js';

export default class TaskView {
    taskList;
    constructor(taskList) {
        this.taskList = taskList;
    }

    #createTaskItem(task) {
        let taskItem = new TaskItem(task);
        let taskItemTitle = document.createElement('div');
        taskItemTitle.setAttribute('slot', 'title');
        taskItemTitle.textContent = task.title;

        let taskItemDescription = document.createElement('div');
        taskItemDescription.setAttribute('slot', 'description');
        taskItemDescription.textContent = task.description;

        taskItem.appendChild(taskItemTitle);
        taskItem.appendChild(taskItemDescription);

        this.taskList.appendChild(taskItem);
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