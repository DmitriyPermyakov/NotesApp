export default class TasksList {
    #taskList;
    #selected;
    constructor() {
        this.#taskList = document.querySelector('#tasks-list');
        this.#selected = null;
        this.#taskList.addEventListener('popup-menu-opened', (event) => {
            this.#closeAnotherPopup (event);
        });
        this.#taskList.addEventListener('click', (event) => { this.#selectTaskItem(event)});
    }

    get taskList() {
        return this.#taskList;
    }

    #closeAnotherPopup(event) {
        if(this.#selected === null) {
            this.#selected = event.target;
            this.#selected.isSelected = true;
        } else {
            if(this.#selected !== event.target) {
                this.#selected.isSelected = false;
                this.#selected.taskPopupMenu.isOpened = false;
                this.#selected = event.target;
            }
        }
    }
    #selectTaskItem(event) {
        if(this.#selected !== null) {
            if(event.target !== this.#selected & event.target !== this.#taskList) {
                this.#selected.isSelected = false;
                event.target.isSelected = true;
                this.#selected = event.target;
            } else {
                if(this.#selected === event.target) {
                    event.target.isSelected = false;
                    this.#selected = null;
                }
            }
        } else {
            if(event.target !== this.#taskList) {
                event.target.isSelected = true;
                this.#selected = event.target;
            }

        }
    }
}
