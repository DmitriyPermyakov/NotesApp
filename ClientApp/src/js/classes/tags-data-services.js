const tagsDataServices = {
    url: "https://localhost:5001/tag",

    async loadAllTags() {
        return await fetch(this.url).then(response => response.json());
    },

    async addTag(tag) {
       await fetch(this.url, { method: 'POST', mode: 'no-cors', cache: 'no-cache', body: JSON.stringify( { "id": 0, "name": "newTag" })});
    },

    async deleteTag(id) {
        let response = await fetch(url, { method: 'DELETE', body: id });
        return response.status;
    },
}

export { tagsDataServices }