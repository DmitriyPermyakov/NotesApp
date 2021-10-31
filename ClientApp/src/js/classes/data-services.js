export default dataServices = {
    tasks : [],

    loadAllTasks() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    },

    addTask(task) {
        localStorage.setItem('task')
    },

    changeState() {

    },

    deleteTask(id) {

    },

}