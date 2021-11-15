import { PopupMenuAnimation } from "../classes/task-item-popup-animation.js";

const templatePopup = document.createElement('template');
templatePopup.innerHTML = `
<style>
.task-popup {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    padding: 1rem;

    border-radius: 5px;
    background-color: #3a3f45;

    position: absolute;
    top: 30px;
    right: -7px;

    filter: drop-shadow(0 0 3px  #2e2e2e);
    z-index: 1;

    transform-origin: top right;
}

.task-popup::after {
    display: block;
    content: "";
    width: 1em;
    height: 1em;
    background-color: #3a3f45;
    position: absolute;
    top: -4px;
    right: 20px;
    transform: scaleX(.8) rotate(45deg);
}

.task-popup__btn {
    padding-left: .2em;
    width: 100%;
    border: none;
    background: none;
    outline: none;
    text-align: left;
    color: #afafaf;
    cursor: pointer;

}

.task-popup__btn:hover {
    color: #e7e8ea;
}

.task-popup__btn + .task-popup__btn{
    padding-top: .3em;
}


</style>
<div class="task-popup">
    <button class="task-popup__btn" id="pin">Pin on the top</button>
    <button class="task-popup__btn" id="completed">Completed</button>
    <button class="task-popup__btn" id="change">Change</button>
    <button class="task-popup__btn" id="delete">Delete</button>
</div>
`;

export class TaskPopupMenu extends HTMLElement{
    #isOpened;
    #animationPopup;
    #popupMenu;
    #pinOneTheTopButton;
    #completeButton;
    #changeButton;
    #deleteButton;
    #pinEvent;
    #completedEvent;
    #changeEvent;
    #deleteEvent;

    constructor(task) {
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(templatePopup.content.cloneNode(true));
        this.#popupMenu = this.shadowRoot.querySelector('.task-popup');
        this.#animation = new PopupMenuAnimation(this.#popupMenu);
        this.style.display = 'none';

        this.#pinOneTheTopButton = this.shadowRoot.querySelector('#pin');
        this.#completeButton = this.shadowRoot.querySelector('#completed');
        this.#changeButton = this.shadowRoot.querySelector('#change');
        this.#deleteButton = this.shadowRoot.querySelector('#delete');

        this.#completedEvent = new CustomEvent('completed', {
            bubbles: true,
            composed: true,
        });

        this.#deleteEvent = new CustomEvent('delete-item', {
            bubbles: true,
            composed: true,
        });


        this.#completeButton.addEventListener('click', () => { this.dispatchEvent(this.#completedEvent) });
        this.#deleteButton.addEventListener('click', () => { this.dispatchEvent(this.#deleteEvent) });
    }

    get #animation() {
        return this.#animationPopup;
    }

    set #animation(value) {
        this.#animationPopup = value;
    }

    get isOpened() {
        return this.#isOpened;
    }

    set isOpened(value) {
        if(value === true) {
            this.style.display = 'block';
            this.#isOpened = true;
            this.#animation.playOpenAnimation();
        } else {
            if(value === false) {
                this.#animation.playCloseAnimation();
                this.#isOpened = false;
            }
        }
    }
}

customElements.define('task-popup-menu', TaskPopupMenu);