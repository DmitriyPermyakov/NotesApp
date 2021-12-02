export class Task {
    constructor(id, title, description, dateStart, dateEnd, isCompleted, isFailed, remindBefore, tag) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.isCompleted = isCompleted;
        this.isFailed = isFailed;
        this.remindBefore = remindBefore;
        this.tag = tag;
    }
}