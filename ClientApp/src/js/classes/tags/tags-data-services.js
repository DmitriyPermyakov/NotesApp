const tagsDataServices = {
    url: "https://localhost:5001/tag",

    async loadAllTags() {
        return await fetch(this.url).then(response => response.json());
    },

    async addTag(tag) {
       return await fetch(this.url, { method: 'POST',  headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(tag) }).then(response => response.json());
    },

    async deleteTag(id) {
        let response = await fetch(this.url + "/" + id, { method: 'DELETE', cache: 'no-cache', headers: { 'Content-Type': 'application/json' } });
        return response.status;
    },
}

export { tagsDataServices }