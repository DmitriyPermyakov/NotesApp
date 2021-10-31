const template = document.createElement('template');
template.innerHTML = `
<style>
.tasks__item:first-child {
    border-bottom: 1px solid $light-gray;
}

.tasks__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    padding: 1em 1.5em;
    font-size: 1rem;
}

.tasks__item + .tasks__item {
    border-bottom: 1px solid $light-gray;
}

.tasks__item:hover {
    background-color: $purple;
}

.tasks__item:hover .tasks-icon {
    background-color: $hovered;
}

.tasks__item:hover .task-description {
    color: $hovered;
}

.tasks__item:hover .task-menu span {
    background-color: $hovered;
}

.tasks-icon {
    display: inline-block;
    margin-right: 2em;

    height: 2.5em;
    width: 2.5em;

    min-width: 2.5em;
    min-height: 2.5em;

    border: 2px solid $light-gray;
    border-radius: 50%;

    position: relative;
}

.task-icon__icon {
    width: 1.3em;
    height: 1.3em;

    position: absolute;
    top: 25%;
    left: 25%;

    fill: $light-gray;
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
    color: $hovered;
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

    background-color: $light-gray;
    border-radius: 50%;
}

.task-menu span + span {
    margin-left: .3em;
}
</style>

<div class="tasks__item">
            <div class="tasks-icon">
                <svg class="task-icon__icon" >
                    <symbol id="checked" viewBox="0 0 515.556 515.556">
                        <g>
                            <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
                        </g>
                    </symbol>
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

export class TaksItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( { mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}


customElements.define('task-item', TaksItem);