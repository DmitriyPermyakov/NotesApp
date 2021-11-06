const templateTask = document.createElement('template');
templateTask.innerHTML = `
<style>

.tasks__item {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    padding: 1em 1.5em;
    font-size: 1rem;

    border-bottom: 1px solid #707070;
}

.tasks__item:hover {
    background-color: #6841da;
}

.tasks__item:hover .tasks-icon {
    background-color: #e7e8ea;
}

.tasks__item:hover .task-description {
    color: #e7e8ea;
}

.tasks__item:hover .task-menu span {
    background-color: #e7e8ea;
}

.tasks-icon {
    display: inline-block;
    margin-right: 2em;

    height: 2.5em;
    width: 2.5em;

    min-width: 2.5em;
    min-height: 2.5em;

    border: 2px solid #707070;
    border-radius: 50%;

    position: relative;
}

.task-icon__icon {
    width: 1.3em;
    height: 1.3em;

    position: absolute;
    top: 25%;
    left: 25%;

    fill: #707070;
}

.task-body {
    display: inline-block;

    text-align: center;
}

.task-body::first-letter {
    text-transform: capitalize;
}

.task-title {
    margin: 0;
    padding: 0;

    font-size: .9em;
    color: #e7e8ea;
}

.task-description {
    margin: 0;
    padding: 0;

    font-size: .7em;
}

.task-menu {
    flex: 1 1 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
}
.task-menu span {
    display: inline-block;
    width: .5em;
    height: .5em;

    background-color: #707070;
    border-radius: 50%;
}

.task-menu span + span {
    margin-left: .3em;
}
</style>

<div class="tasks__item">
            <div class="tasks-icon">
                <svg class="task-icon__icon" viewBox="0 0 515.556 515.556">
                    <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
                </svg>
            </div>
            <div class="task-body">
                <h3 class="task-title"><slot name="title"></slot></h3>
                <p class="task-description"><slot name="description"</slot></p>
            </div>
            <div class="task-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
`;

export default class TaksItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( { mode: 'open' });
        this.shadowRoot.appendChild(templateTask.content.cloneNode(true));

    }
}


customElements.define('task-item', TaksItem);