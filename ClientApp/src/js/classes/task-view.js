export class TaskView {
    task;
    constructor(task) {
        this.task = task;
    }

    drawTask(taskList) {
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
}