import { tagsDataServices } from "./tags-data-services.js";

export default class TagsService {
    constructor() {

    }

    async addTag(tag) {
      await tagsDataServices.addTag(tag);
    }

    async loadAllTags() {
       return await tagsDataServices.loadAllTags();
    }

    deleteTag(id) {

    }

}