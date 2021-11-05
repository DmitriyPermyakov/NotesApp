export class Task {
    #title;
    #description;
    #dateStart;
    #dateEnd;
    #remindBefore;
    #tags;

    constructor(title, description, dateStart, dateEnd, remindBefore, tags) {
        this.title = title;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.remindBefore = remindBefore;
        this.tag = tags;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        this.#description = value;
    }

    get dateStart() {
        return this.#dateStart;
    }

    set dateStart(value) {
        this.#dateStart = value;
    }

    get dateEnd() {
        return this.#dateEnd;
    }

    set dateEnd(value) {
        this.#dateEnd = value;
    }

    get remindBefore() {
        return this.#remindBefore;
    }

    set remindBefore(value) {
        this.#remindBefore = value;
    }

    get tags() {
        return this.#tags;
    }

    set tags(value) {
        this.#tags = value;
    }

}