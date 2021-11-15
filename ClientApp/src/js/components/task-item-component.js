import { TaskPopupMenu } from "./task-popup-menu-component.js";

const templateTask = document.createElement('template');
templateTask.innerHTML = `
<style>

.tasks__item {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    padding: 1em 1.5em;
    font-size: 1rem;

    border-bottom: 1px solid #707070;
}

.tasks__item:hover {
    background-color: #6841da;
}

.tasks__item:hover .tasks-icon {
    background-color: #e7e8ea;
}

.tasks__item:hover .task-description {
    color: #e7e8ea;
}

.tasks__item:hover .task-menu span {
    background-color: #e7e8ea;
}

.selected {
    background-color: #6841da;
}

.tasks__item.selected .tasks-icon {
    background-color: #e7e8ea;
}

.tasks__item.selected .task-description {
    color: #e7e8ea;
}

.tasks__item.selected .task-menu span {
    background-color: #e7e8ea;
}


.tasks-icon {
    display: inline-block;
    margin-right: 2em;

    height: 2.5em;
    width: 2.5em;

    min-width: 2.5em;
    min-height: 2.5em;

    border: 2px solid #707070;
    border-radius: 50%;

    position: relative;
}

.task-icon__icon {
    width: 1.3em;
    height: 1.3em;

    position: absolute;
    top: 25%;
    left: 25%;

    fill: #707070;
}

.task-body {
    display: inline-block;

    text-align: center;
}

.task-body::first-letter {
    text-transform: capitalize;
}

.task-title {
    margin: 0;
    padding: 0;

    font-size: .9em;
    color: #e7e8ea;
}

.task-description {
    margin: 0;
    padding: 0;

    font-size: .7em;
}

.task-menu {
    flex: 1 1 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    position: relative;
}

.task-menu__btn {
    cursor: pointer;
}
.task-menu span {
    display: inline-block;
    width: .5em;
    height: .5em;

    background-color: #707070;
    border-radius: 50%;
}

.task-menu span + span {
    margin-left: .3em;
}

.completed  .tasks-icon {
    border: 2px solid #bfbfbf;
    background-color: green;
}
.completed .task-icon__icon {
    fill: #bfbfbf;
}

.completed:hover .tasks-icon {
    border: 2px solid #707070;
}
.completed:hover .task-icon__icon {
    fill: #707070;
}
</style>

<div class="tasks__item">
            <div class="tasks-icon">
                <svg class="task-icon__icon" viewBox="0 0 515.556 515.556">
                    <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
                </svg>
            </div>
            <div class="task-body">
                <h3 class="task-title"><slot name="title"></slot></h3>
                <p class="task-description"><slot name="description"</slot></p>
            </div>
            <div class="task-menu">
                <div class="task-menu__btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
`;

export default class TaskItem extends HTMLElement {
    #task;
    #taskItem;
    #taskMenuBtn;
    #taskPopupMenu;
    #taskMenuInnerElem;
    #isSelected;
    #popupOpenedEvent;
    #isCompleted;


    constructor(task) {
        super();
        this.attachShadow( { mode: 'open' });
        this.shadowRoot.appendChild(templateTask.content.cloneNode(true));

        this.#isCompleted = false;

        this.#isSelected = false;
        this.#task = task;
        this.#taskItem = this.shadowRoot.querySelector('.tasks__item');
        this.#taskMenuBtn = this.shadowRoot.querySelector('.task-menu__btn');
        this.#taskPopupMenu = new TaskPopupMenu(task);
        this.#taskPopupMenu.isOpened = false;

        this.#taskMenuInnerElem = this.#taskPopupMenu.shadowRoot.querySelector('.task-popup');
        this.#taskMenuBtn.appendChild(this.#taskPopupMenu);


        document.body.addEventListener('click', (event) => { this.#closePopup(event); });
        this.#taskMenuBtn.addEventListener('click',  (event) => {
             event.stopPropagation();
             this.#showPopup();
        });

        this.#popupOpenedEvent = new CustomEvent('popup-menu-opened', {
            bubbles: true,
            composed: true,
            detail: this.#taskPopupMenu
        });

    }

    get taskPopupMenu() {
        return this.#taskPopupMenu;
    }

    get taskItem() {
        return this.#taskItem;
    }

    get isSelected() {
        return this.#isSelected;
    }

    set isSelected(value) {
        if(value === true) {
            this.#taskItem.classList.add('selected');
            this.#isSelected = true;
        } else {
            this.#taskItem.classList.remove('selected');
            this.#isSelected = false;
        }
    }

    closePopupInAnotherTaskItem() {
        this.#taskPopupMenu.isOpened = false;
    }

    #closePopup(event) {
        let taskMenuRect = this.#taskMenuInnerElem.getBoundingClientRect();

        if (event.clientX < taskMenuRect.left
            || event.clientX > taskMenuRect.right
            || event.clientY < taskMenuRect.top
            || event.clientY > taskMenuRect.bottom) {
            this.#taskPopupMenu.isOpened = false;
        }

    }

    #showPopup() {
        this.#taskPopupMenu.isOpened = true;
        this.dispatchEvent(this.#popupOpenedEvent);
    }

    changeTaskState() {
        this.#isCompleted = !this.#isCompleted;
        this.#isCompleted ? this.taskItem.classList.add('completed') : this.taskItem.classList.remove('completed');
    }

    deleteItem(taskList) {
        taskList.removeChild(this);
    }
}


customElements.define('task-item', TaskItem);