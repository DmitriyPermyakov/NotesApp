import { remindList } from "../documentVariables.js";
import { Task } from "./task.js";

export default class TaskForm {
    #titleField;
    #descriptionField;
    #dateStartField;
    #dateEndField;
    #remindBeforeField;
    #tagsField;

    constructor(title, description, dateStart, dateEnd, remindBefore, tags = []) {
        this.title = title;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.remindBefore = remindBefore;
        this.tags = [tags];
    }

    get title() {
        return this.#titleField;
    }

    set title (value) {
        if(value == '') {
            throw new Error('title can\'t be empty');
        }
        this.#titleField = value;
    }

    get description() {
        return this.#descriptionField;
    }

    set description(value) {
        if(value == '') {
            throw new Error('description can\'t be empty');
        }
        this.#descriptionField = value;
    }

    get dateStart() {
        return this.#dateStartField;
    }

    set dateStart(value) {
        let date = new Date(value);
        if(this.#compareDates(date)) {
            throw new Error('Date can\'t be earlier than now');
        }

        this.#dateStartField = date.toLocaleDateString('en-us', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    }

    get dateEnd() {
        return this.#dateEndField;
    }

    set dateEnd(value) {
        let date = new Date(value);
        if(this.#compareDates(date)) {
            throw new Error('Date can\'t be earlier than now');
        }
        this.#dateEndField = date.toLocaleDateString('en-us', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });

    }

    get remindBefore() {
        return this.#remindBeforeField;
    }

    set remindBefore(value) {
        if( value == 'never' || value == 'one day' || value == 'two days' || value == 'three days') {
            this.#remindBeforeField = value;
        } else {
            throw new Error('value of remind field has wrong value');
        }
    }

    get tags() {
        return this.#tagsField;
    }

    set tags(value) {
        this.#tagsField = value;
    }

    createTask() {
        let task = new Task(this.title, this.description, this.dateStart, this.dateEnd, this.remindBefore, this.tags);
        return task;
    }

    #compareDates(date) {
        return date.getTime() < new Date().getTime();
    }
}