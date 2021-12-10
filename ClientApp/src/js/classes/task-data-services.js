const taskDataServices = {
    tasks : [],
    url: "https://localhost:5001/task",

    async loadAllTasks() {
        let response = await fetch(url);

        return await response.json();
    },

    async addTask(task) {
       return await fetch(this.url, {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(task)}).then(response => response.json());

    },

    changeState() {

    },

    async deleteTask(id) {
        let response = await fetch(url, { method: 'DELETE', body: id });
        return response.status;
    },

}

export { taskDataServices };