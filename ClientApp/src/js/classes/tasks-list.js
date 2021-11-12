export default class TasksList {
    #taskList;
    #selected;
    constructor() {
        this.#taskList = document.querySelector('#tasks-list');
        this.#selected = null;
        this.#taskList.addEventListener('task-item-clicked', (event) => { this.#select(event); console.log(event.target) });
    }

    get taskList() {
        return this.#taskList;
    }

    #select(event) {
        if(this.#selected !== null) {
            if(event.detail.target !== this.#selected) {
                this.#selected.classList.remove('selected');
                event.detail.target.classList.add('selected');
                this.#selected = event.detail.target;
            } else {
                if(this.#selected === event.detail.target) {
                    event.detail.target.classList.remove('selected');
                    this.#selected = null;
                }
            }
        } else {
            event.detail.target.classList.add('selected');
            this.#selected = event.detail.target;
        }

    }
}
