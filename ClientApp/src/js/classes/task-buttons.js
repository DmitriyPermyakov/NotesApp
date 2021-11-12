import { ButtonAnimation } from "./button-animation.js";
import { titleInput, descriptionInput, dateFrom, dateTo, remindList, tagsList } from "../documentVariables.js";
import  TaskView  from "./task-view.js";
import  TaskService  from "./task-service.js";
import { Validation } from "./validation.js";
import { Task } from "./task.js";

export class TaskButtons {
    #addTaskBtn;
    #closeFormBtn;
    #clearFormBtn;
    #buttonAnimation;
    #taskView;
    #taskService;
    #validator;
    #taskList;

    constructor(taskList) {
        this.#addTaskBtn = document.querySelector('#add-task-button');
        this.#closeFormBtn = document.querySelector('#close-form-button');
        this.#clearFormBtn = document.querySelector('#clear-field-button');

        this.#buttonAnimation = new ButtonAnimation(this.#addTaskBtn, this.#clearFormBtn, this.#closeFormBtn);
        this.#taskList = taskList;
        this.#taskView = new TaskView(this.#taskList);
        this.#taskService = new TaskService(this.#taskView);
        this.#validator = new Validation(titleInput, descriptionInput, dateFrom, dateTo, remindList, tagsList);

        this.#addTaskBtn.addEventListener('click', () => { this.openForm() } );
        this.#closeFormBtn.addEventListener('click', () => { this.#closeForm() } );
        this.#clearFormBtn.addEventListener('click', () => { this.#clearFormFields() });

    }

    openForm() {
        this.#taskList.classList.add('open-task-list');
        this.#buttonAnimation.openButtons();

        Promise.all(this.#addTaskBtn.getAnimations().map(a => a.finished)).then(this.#addTaskBtn.removeEventListener('click', this.openForm)).then(this.#addTaskBtn.addEventListener('click', this.#addTaskItem));
    }

    #closeForm() {
        this.#taskList.classList.remove('open-task-list');
        this.#buttonAnimation.closeButtons();
        this.#addTaskBtn.removeEventListener('click', this.#addTaskItem);
        this.#addTaskBtn.addEventListener('click', this.openForm);
    }

    #addTaskItem() {
        if(this.#validator.isAllFieldsValid) {
            let task = new Task(titleInput.value, descriptionInput.value, dateFrom.value, dateTo.value, remindList.value, tagsList.value);
            this.#taskService.addTask(task);
            this.#clearFormFields();
        }
        return;
    }

    #clearFormFields() {
        titleInput.value = '';
        descriptionInput.value = '';
        dateFrom.reset();
        dateTo.reset();
        remindList.value = 'never';
        tagsList.value = 'none';
    }
}


