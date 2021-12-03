const tagsDataServices = {
    url: "https://localhost:5001/tag",

    async loadAllTags() {
        return await fetch(this.url).then(response => response.json());
    },

    async addTag(tag) {
       let response =  await fetch(url, {method: 'POST', body: JSON.stringify(tag)});
       return await response.json();
    },

    async deleteTag(id) {
        let response = await fetch(url, { method: 'DELETE', body: id });
        return response.status;
    },
}

export { tagsDataServices }