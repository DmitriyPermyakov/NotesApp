export class Tags {
    #tagsSelect;
    #tagsList;
    #tags = [ 'none', 'travelling', 'programming', 'creating' ];
    #inputField;
    #addButton;

    constructor() {
        this.#tagsSelect = document.querySelector('#form-tags-list');
        this.#tagsList = document.querySelector('#tags-list');
        this.#createAddButton();

        this.#drawTagsInList();
        this.#drawTagsInSelect();
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

    #drawTagsInSelect() {
        this.#tagsSelect.innerHTML = '';
        for(let tag of this.#tags) {
            let tagElem = document.createElement('option');
            tagElem.textContent = tag;
            tagElem.setAttribute('value', tag);
            this.#tagsSelect.appendChild(tagElem);
        }
    }

    #drawTagsInList() {
        this.#tagsList.innerHTML = '';
        for(let count  = 1; count < this.#tags.length; count++) {
            let tagElem = document.createElement('li');
            let text = document.createElement('span');
            let btn = document.createElement('button');
            btn.setAttribute('id', 'remove-tag');
            btn.classList.add('tags-list__remove-btn');
            text.textContent = this.#tags[count];
            tagElem.appendChild(text);
            tagElem.appendChild(btn);
            tagElem.classList.add('tags-list__item');
            this.#tagsList.appendChild(tagElem);
        }

        this.#tagsList.appendChild(this.#addButton);
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
             this.#tags.push(input.value);
             this.#drawTagsInList();
             this.#drawTagsInSelect();
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