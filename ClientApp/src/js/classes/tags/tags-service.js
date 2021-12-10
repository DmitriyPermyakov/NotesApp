import { tagsDataServices } from "./tags-data-services.js";

export default class TagsService {
    constructor() {

    }

    async addTag(tag) {
      return await tagsDataServices.addTag(tag);
    }

    async loadAllTags() {
       return await tagsDataServices.loadAllTags();
    }

    async deleteTag(id) {
      return await tagsDataServices.deleteTag(id);
    }

}