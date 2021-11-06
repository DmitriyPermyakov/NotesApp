export class Task {
    constructor(title, description, dateStart, dateEnd, remindBefore, tags) {
        this.title = title;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.remindBefore = remindBefore;
        this.tag = tags;
    }
}