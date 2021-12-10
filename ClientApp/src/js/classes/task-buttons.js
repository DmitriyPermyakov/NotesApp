import { ButtonAnimation } from "./button-animation.js";
import { titleInput, descriptionInput, dateFrom, dateTo, remindList, tagsList } from "../documentVariables.js";
import { Validation } from "./validation.js";
import { Task } from "./task.js";

export default class TaskButtons {
    #addTaskBtn;
    #closeFormBtn;
    #clearFormBtn;
    #buttonAnimation;
    #taskService;
    #validation;
    #taskList;
    #openFormFunction;
    #addTaskItemFunction;

    constructor(taskList, taskService) {
        this.#addTaskBtn = document.querySelector('#add-task-button');
        this.#closeFormBtn = document.querySelector('#close-form-button');
        this.#clearFormBtn = document.querySelector('#clear-field-button');

        this.#taskList = taskList;
        this.#taskService = taskService;

        this.#buttonAnimation = new ButtonAnimation(this.#addTaskBtn, this.#clearFormBtn, this.#closeFormBtn);
        this.#validation = new Validation(titleInput, descriptionInput, dateFrom, dateTo, remindList, tagsList);

        this.#openFormFunction = this.openForm.bind(this);
        this.#addTaskItemFunction = this.#addTaskItem.bind(this);

        this.#addTaskBtn.addEventListener('click', this.#openFormFunction );
        this.#closeFormBtn.addEventListener('click', () => { this.#closeForm() } );
        this.#clearFormBtn.addEventListener('click', () => { this.#clearFormFields() });

    }

    get validator() {
        return this.#validation;
    }

    set validator(value) {
        this.#validation = value;
    }

    openForm() {
        this.#taskList.classList.add('open-task-list');
        this.#buttonAnimation.openButtons();
        this.#addTaskBtn.removeEventListener('click', this.#openFormFunction );
        this.#addTaskBtn.addEventListener('click', this.#addTaskItemFunction );
    }

    #closeForm() {
        this.#taskList.classList.remove('open-task-list');
        this.#buttonAnimation.closeButtons();
        this.#addTaskBtn.removeEventListener('click', this.#addTaskItemFunction );
        this.#addTaskBtn.addEventListener('click', this.#openFormFunction);
    }

    #addTaskItem() {
        if(this.#validation.isAllFieldsValid) {
            let dateStart = new Date(dateFrom.value).toISOString();
            let dateEnd = new Date(dateTo.value).toISOString();
            console.log(remindList.value);
            let task = new Task(0, titleInput.value, descriptionInput.value, dateStart, dateEnd, false, false, remindList.value, tagsList.value);
            console.log(task);
            this.#taskService.addTask(task).then(task => console.log(task));
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


