export default class Search {
    #searchBar;
    #taskItems;
    #taskList;
    #taskView;
    constructor(taskList, taskView) {
        this.#searchBar = document.querySelector('#search-bar');
        this.#taskList = document.querySelector('#tasks-list');
        this.#taskView = taskView;
        this.#taskItems = this.#taskList.querySelectorAll('task-item');
        this.#searchBar.addEventListener('focus', () => { this.#taskItems = this.#taskList.querySelectorAll('task-item'); });
        this.#searchBar.addEventListener('input', (event) => { this.#search(event) });
    }

    #search(event) {
        let filteredItems = [];
        for(let item of this.#taskItems) {
            if(item.textContent.toLowerCase().includes(event.target.value)) {
                filteredItems.push(item);
            }
        }
        this.#redrawTaskList(filteredItems);

    }

    #redrawTaskList(filteredTasks) {
        this.#clearTaskList();
        for(let item of filteredTasks) {
            this.#taskList.appendChild(item);
        }
    }

    #clearTaskList() {
        while(this.#taskList.firstChild) {
            this.#taskList.removeChild(this.#taskList.firstChild);
        }
    }




}