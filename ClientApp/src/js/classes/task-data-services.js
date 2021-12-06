const taskDataServices = {
    tasks : [],
    url: "https://localhost:5001/task",

    async loadAllTasks() {
        let response = await fetch(url);

        return await response.json();
    },

    async addTask(task) {
       let response = await fetch(this.url, {method: 'POST',mode: 'no-cors', body: JSON.stringify(task)});
       return await response.json();
    },

    changeState() {

    },

    async deleteTask(id) {
        let response = await fetch(url, { method: 'DELETE', body: id });
        return response.status;
    },

}

export { taskDataServices };