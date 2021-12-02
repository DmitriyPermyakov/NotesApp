const dataServices = {
    tasks : [],
    url: "https:localhost:5001/task",

    loadAllTasks() {
        let response = await fetch(url);
        let result = await response.json();
        return result;
    },

    addTask(task) {
       let response =  await fetch(url, {method: 'POST', body: JSON.stringify(task)});
       let result = await response.json();

       return result;
    },

    changeState() {

    },

    deleteTask(id) {
        let response = await fetch(url, { method: 'DELETE', body: id });
        return response;
    },

}

export { dataServices };