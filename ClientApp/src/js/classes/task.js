export class Task {
    #title;
    #description;
    #dateStart;
    #dateEnd;
    #remindBefore;
    #tags;

    constructor(title, description, dateStart, dateEnd, remindBefore = 'never', tags = []) {
        this.title = title;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.remindBefore = remindBefore;
        this.tag = tag;
    }

    get title() {
        return this.#title;
    }

    set title (value) {
        if(value == '') {
            throw new Error('title can\'t be empty');
        }
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        if(value == '') {
            throw new Error('description can\'t be empty');
        }
    }

    get dateStart() {
        return this.#dateStart;
    }

    set dateStart(value) {
        let date = new Date(value);
        if(date < Date.now()) {
            throw new Error('Date can\'t be earlier than now');
        }
        this.#dateStart = date;
    }

    get dateEnd() {
        return this.dateEnd;
    }

    set dateEnd(value) {
        let date = new Date(value);
        if(date < Date.now()) {
            throw new Error('Date can\'t be earlier than now');
        }
        this.#dateStart = date;
    }

    get remindBefore() {
        return this.#remindBefore;
    }

    set remindBefore(value) {
        if( value !== 'never' || value !== 'one day' || value !== 'two days' || value !== 'three days') {
            throw new Error('value of remind field has wrong value');
        }
        this.#remindBefore = value;
    }

    get tags() {
        return this.#tags;
    }

    set tags(value) {
        this.#tags = value;
    }

}