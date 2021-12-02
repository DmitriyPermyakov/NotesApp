const dataServices = {
    tasks : [],
    url: "https:localhost:5001/task",

    async loadAllTasks() {
        let response = await fetch(url);

        return await response.json();
    },

    async addTask(task) {
       let response =  await fetch(url, {method: 'POST', body: JSON.stringify(task)});
       return await response.json();
    },

    changeState() {

    },

    async deleteTask(id) {
        let response = await fetch(url, { method: 'DELETE', body: id });
        return response.status;
    },

}

export { dataServices };