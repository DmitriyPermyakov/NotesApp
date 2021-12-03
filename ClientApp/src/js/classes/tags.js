import TagsService from "./tags-service.js";

export default class Tags {
    #tagsSelect;
    #tagsList;
    #tags = [];
    #inputField;
    #addButton;
    #tagService;

    constructor() {
        this.#tagService = new TagsService();
        this.#tagsSelect = document.querySelector('#form-tags-list');
        this.#tagsList = document.querySelector('#tags-list');
        this.#createAddButton();

        this.#tagService.loadAllTags().then(tags => this.#loadTagsInArray(tags)).then( () => this.#drawTagsInList(this.#tags)).then(() => this.#drawTagsInSelect(this.#tags));

        // this.#drawTagsInSelect(this.#tags);

        this.#createInputField();
        this.#addButton.appendChild(this.#inputField);

        this.#addButton.addEventListener('click', () => {
            this.#showInputField();
        });

        this.#inputField.addEventListener('keyup', (event) => {
            if(event.code === 'Enter') {
                this.addTag(this.#inputField);
            }
        });

        this.#tagsList.addEventListener('click', (event) => {
            if(event.target.id === 'remove-tag') {
                this.#removeTag(event.target.previousElementSibling);
            }
        });


    }

    #loadTagsInArray(tags) {
        this.#tags = tags;
    }

    #drawTagsInSelect(tags) {
        this.#tagsSelect.innerHTML = '';
        tags.forEach(tag => this.#createTagOptionInSelect(tag));
    }

    #drawTagsInList(tags) {
        console.log(tags);
        this.#tagsList.innerHTML = '';
        tags.forEach(tag => this.#createTagLabel(tag));
        this.#tagsList.appendChild(this.#addButton);
    }

    #createTagLabel(tag) {
        let tagElem = document.createElement('li');
        let text = document.createElement('span');
        let btn = document.createElement('button');
        btn.setAttribute('id', 'remove-tag');
        btn.classList.add('tags-list__remove-btn');
        text.textContent = tag.name;
        tagElem.appendChild(text);
        tagElem.appendChild(btn);
        tagElem.classList.add('tags-list__item');
        this.#tagsList.appendChild(tagElem);
    }

    #createTagOptionInSelect(tag) {
        let tagElem = document.createElement('option');
        tagElem.textContent = tag.name;
        tagElem.setAttribute('value', tag.id);
        this.#tagsSelect.appendChild(tagElem);
    }
    #createAddButton() {
        this.#addButton = document.createElement('button');
        this.#addButton.classList.add('tags-list__add-tag-btn');
    }

    #createInputField() {
        this.#inputField = document.createElement('input');
        this.#inputField.classList.add('tag-list__input');
    }

    #showInputField() {
        let coordinatesOfButton = this.#addButton.getBoundingClientRect();
        this.#inputField.style.top = -4 + 'px';
        this.#inputField.style.left = coordinatesOfButton.height + 2 + 'px';
        this.#inputField.style.display = 'block';
        this.#inputField.focus();
    }

    addTag(input) {
         if(input.value !== '') {
             let returnedTag = this.#tagService.addTag( { id: 0, name: input.value });
             this.#createTagLabel(returnedTag);
             this.#createTagOptionInSelect(returnedTag);
             input.style.display = 'none';
             input.value = '';
         } else {
             input.style.display = 'none';
         }
         return;
    }

    #removeTag(elem) {
       let position = this.#tags.indexOf(elem.textContent);
       if(position !== -1) {
           this.#tags.splice(position, 1);
           this.#drawTagsInSelect();
           this.#drawTagsInList();
       }
       return;
    }
}