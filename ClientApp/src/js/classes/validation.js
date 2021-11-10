export class Validation {
    #title;
    #description;
    #dateStart;
    #dateEnd;
    #remindBefore;
    #remindList;


    constructor(title, description, dateStart, dateEnd, remindBefore, tags) {
        this.#remindList = [ 'never', 'one day', 'two days', 'three days' ];
        this.#title = title;
        this.#title.addEventListener('input', () => this.validateTextField(this.#title));

        this.#description = description;
        this.#description.addEventListener('input', () =>  this.validateTextField(this.#description));

        this.#dateStart = dateStart;
        this.#dateEnd = dateEnd;

        this.#dateStart.addEventListener('date-setted', () => {
            this.compareDates(this.#dateStart, this.#dateEnd);
        });

        this.#dateEnd.addEventListener('date-setted', () => {
            this.compareDates(this.#dateStart, this.#dateEnd);
        });

        this.#remindBefore = remindBefore;
        this.#remindBefore.addEventListener('input', () => {
            this.validateReminging(this.#remindBefore);
        });
    }

    validateTextField(field) {
        field.classList.remove('invalidField');
        if(field.value !== ''){
            return true;
        } else {
            field.classList.add('invalidField');
            return false;
        }
    }


    compareDates(dateStart, dateEnd) {

        dateStart.classList.remove('invalidField');
        dateEnd.classList.remove('invalidField');

        if(dateStart.isDefaultValue || dateEnd.isDefaultValue || dateStart.selectedDate > dateEnd.selectedDate) {
            dateStart.classList.add('invalidField');
            dateEnd.classList.add('invalidField');
        } else {
            dateStart.classList.remove('invalidField');
            dateEnd.classList.remove('invalidField');
        }

    }

    validateReminging(field) {
        field.classList.remove('invalidField');
        if(!this.#remindList.includes(field.value)) {
            field.classList.add('invalidField');
        } else {
            field.classList.remove('invalidField');
        }
    }
}