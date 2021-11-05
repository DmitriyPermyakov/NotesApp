const dataServices = {
    tasks : [],

    loadAllTasks() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    },

    addTask(task) {
        let jsonTask = JSON.stringify(task);
        console.log(jsonTask);
        localStorage.setItem('task', jsonTask);
        return JSON.parse(localStorage.getItem('task'));
    },

    changeState() {

    },

    deleteTask(id) {

    },

}

export { dataServices };