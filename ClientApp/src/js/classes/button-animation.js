export class ButtonAnimation {
    constructor(addTaskBtn, clearFieldsBtn, closeFormBtn) {
        this.addTaskKeyframe = new KeyframeEffect(addTaskBtn,
            {
                transform: [ 'translate(0%)', 'translate(125%)']
            },
            {
                duration: 100,
                fill: 'backwards',
                direction: 'normal',
            });

        this.clearFieldsKeyframe = new KeyframeEffect(clearFieldsBtn,
            {
                transform: [ 'translate(0%)', 'translate(400%)' ],
                opacity: [ 1 , 0 ],
                pointerEvents: [ 'auto', 'none' ]
            },
            {
                duration: 200,
                fill: 'backwards',
                direction: 'normal',
                delay: 0,
            });

        this.closeFormKeyframe = new KeyframeEffect(closeFormBtn,
            {
                transform: [ 'translate(0%)', 'translate(400%)' ],
                opacity: [ 1, 0 ],
                pointerEvents: [ 'auto', 'none' ]
            },
            {
                duration: 200,
                fill: 'backwards',
                direction: 'normal',
                endDelay: 100,
            });

        this.addTaskBtnAnimation = new Animation(this.addTaskKeyframe, document.timeline);
        this.clearFieldsBtnAnimation = new Animation(this.clearFieldsKeyframe, document.timeline);
        this.closeFormBtnAnimation = new Animation(this.closeFormKeyframe, document.timeline);
    }

    openButtons() {
        this.addTaskBtnAnimation.reverse();
        this.clearFieldsBtnAnimation.reverse();
        this.closeFormBtnAnimation.reverse();
    }

    closeButtons() {
        this.addTaskBtnAnimation.effect.updateTiming({ delay: 500 });
        this.clearFieldsBtnAnimation.effect.updateTiming({ delay: 300 });
        this.closeFormBtnAnimation.effect.updateTiming({ delay: 0 });

        this.addTaskBtnAnimation.reverse();
        this.clearFieldsBtnAnimation.reverse();
        this.closeFormBtnAnimation.reverse();
    }
}

