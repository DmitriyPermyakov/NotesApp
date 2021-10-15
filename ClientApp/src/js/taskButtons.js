
let addTaskBtn = document.querySelector('#add-task-button');
let clearFieldsBtn = document.querySelector('#clear-field-button');
let closeFormBtn = document.querySelector('#close-form-button');

let taskList = document.querySelector('#tasks-list');

addTaskBtn.addEventListener('click', openForm);
closeFormBtn.addEventListener('click', closeForm )

function openForm() {
    taskList.classList.add('open-task-list');
    addTaskBtnAnimation.reverse();
    clearFieldsBtnAnimation.reverse();
    closeFormBtnAnimation.reverse();

    Promise.all(addTaskBtn.getAnimations().map(a => a.finished)).then(addTaskBtn.removeEventListener('click', openForm));
}

function closeForm() {
    taskList.classList.remove('open-task-list');

    addTaskBtnAnimation.effect.updateTiming({ delay: 500 });
    clearFieldsBtnAnimation.effect.updateTiming({ delay: 300 });
    closeFormBtnAnimation.effect.updateTiming({ delay: 0 });

    addTaskBtnAnimation.reverse();
    clearFieldsBtnAnimation.reverse();
    closeFormBtnAnimation.reverse();

    addTaskBtn.addEventListener('click', openForm);
}

let addTaskKeyframe = new KeyframeEffect(addTaskBtn,
    {
        transform: [ 'translate(0%)', 'translate(125%)']
    },
    {
        duration: 100,
        fill: 'backwards',
        direction: 'normal',
    });

let clearFieldsKeyframe = new KeyframeEffect(clearFieldsBtn,
    {
        transform: [ 'translate(0%)', 'translate(400%)' ],
        opacity: [ 1 , 0 ],
        pointerEvents: [ 'auto', 'none' ]
    },
    {
        duration: 300,
        fill: 'backwards',
        direction: 'normal',
        delay: 0,
    });

let closeFormKeyframe = new KeyframeEffect(closeFormBtn,
    {
        transform: [ 'translate(0%)', 'translate(400%)' ],
        opacity: [ 1, 0 ],
        pointerEvents: [ 'auto', 'none' ]
    },
    {
        duration: 300,
        fill: 'backwards',
        direction: 'normal',
        endDelay: 200,
    });

let addTaskBtnAnimation = new Animation(addTaskKeyframe, document.timeline);
let clearFieldsBtnAnimation = new Animation(clearFieldsKeyframe, document.timeline);
let closeFormBtnAnimation = new Animation(closeFormKeyframe, document.timeline);


export { addTaskBtn, clearFieldsBtn, closeFormBtn }