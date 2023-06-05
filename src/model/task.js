export default class Task {
    constructor(completed, id, title, userId) {
        this.completed = completed;
        this.id = id;
        this.title = title;
        this.userId = userId;
    }

    static fromJson(taskObj) {
        return new Task(taskObj.completed, taskObj.id, taskObj.title, taskObj.userId);
    }

}



