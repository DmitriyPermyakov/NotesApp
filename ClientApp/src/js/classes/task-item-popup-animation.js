export class PopupMenuAnimation {
    #played;
    constructor(popupMenu) {
        this.#played = false;
        this.popupMenuKeyfreme = new KeyframeEffect(popupMenu,
        {
            transform: [ 'scale(0%)', 'scale(100%)'],
            opacity: [ 0, 1 ],
        },
        {
            duration: 200,
            fill: 'forwards',
            direction: 'reverse',
            delay: 0
        });

        this.popupMenuAnimation = new Animation(this.popupMenuKeyfreme, document.timeline);
    }

    playOpenAnimation() {
        if(!this.#played) {
            this.popupMenuAnimation.reverse();
            this.#played = true;
        }
    }

    playCloseAnimation() {
        if(this.#played) {
            this.popupMenuAnimation.reverse();
            this.#played = false;
        }
    }
}