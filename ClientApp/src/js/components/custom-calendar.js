const template = document.createElement('template');
template.innerHTML = `
<style>
.calendar-container {
    display: inline-block;



    color: var(--text-color);

    position: relative;

    box-sizing: border-box;

    --row-height: 50px;
    --column-widht: 50px;
    --bg-color: #4c4c4c;
    --text-color: #afafaf;
}

.calendar-background {
    width: 100vw;
    height: 100vh;

    background-color: transparent;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.calendar {
    display: none;
    grid-template-columns: repeat(7, var(--column-widht));
    grid-template-rows: repeat(8, var(--row-height));

    align-items: center;
    justify-items: center;

    position: absolute;
    top: 25px;
    left: 0;

    border-radius: .4em;
    background-color: var(--bg-color);

}

.date-input {
    font-size: 1rem;
    font-weight: bold;
    color: #6c6c6c;

    background-color: var(--bg-color);
    border: none;
    outline: none;
    box-sizing: border-box;
}

.calendar-header {
    grid-row: 1 / 2;
    grid-column: span 7;

    display: flex;
    align-items: inherit;
}

.changeMonth {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
    margin: 0;

    border: none;
    outline: none;

    background-color: var(--bg-color);
    cursor: pointer;
}

.changeMonth:hover .btn-icon {
    fill:rgba(255, 255, 255, .9);
}

.btn-icon {
    display: inline-block;
    width: 1em;
    height: 1em;

    fill: var(--text-color);

    pointer-events: none;
}

.current-date {
    display: inline-block;
    margin: 0 1em;

    pointer-events: none;
    user-select: none;
}

.prev {
    transform: scaleX(-1);
}


.weekdays {
    grid-row: 2 / 3;
    grid-column: span 7;

    display: grid;
    grid-template-rows: var(--row-height);
    grid-template-columns: repeat(7, 50px);

    align-items: center;
    justify-items: center;
    user-select: none;
    pointer-events: none;
}

.sun {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
}

.mon {
    grid-row: 1 / 1;
    grid-column: 2 / 3;
}

.tue {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
}
.wed {
    grid-row: 1 / 2;
    grid-column: 4 / 5;
}
.thu {
    grid-row: 1 / 2;
    grid-column: 5 / 6;
}

.fri {
    grid-row: 1 / 2;
    grid-column: 6 / 7;
}

.sat {
    grid-row: 1 / 2;
    grid-column: 7 / 8;
}

.days {
    grid-row: 3 / 9;
    grid-column: 1 / 8;

    display: grid;
    grid-template-columns: repeat(7, 50px);
    grid-template-rows: repeat(6, 50px);

    justify-items: center;
    align-items: center;
}

.day {
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    display: inline-block;
    padding: .8em;
    line-height: 1;

    background-color: transparent;
    border-radius: 50%;
    border: 1px solid transparent;

    transition: background-color .15s linear, border .1s linear;
    cursor: pointer;
}

.day:hover {
    border: 1px solid #ededed;
    border-radius: 50%;
    background-color: #6841da;

}

.another {
    grid-column: 2 / 3;
}

.current {
    color: rgba(255, 255, 255, .8);
    border: 1px solid rgba(255, 255, 255, .8);
    border-radius: 50%;
}
</style>
<div class="calendar-container">
        <div class="calendar-background"></div>
        <input  class="date-input" type="text" placeholder="29/09/2021">

        <div class="calendar">
            <div class="calendar-header">
                <button class="changeMonth prev">
                    <svg class="btn-icon" viewBox="0 0 512.002 512.002">
                        <path
                            d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105 L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795
                                                                			l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z" />
                        </svg>
                </button>
                <div class="current-date">12 December 2021</div>
                <button class="changeMonth">
                    <svg class="btn-icon" viewBox="0 0 512.002 512.002">
                        <path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105
                                        			L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795
                                        			l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z" />
                    </svg>
                </button>
            </div>
            <div class="weekdays">
                <span class="sun">Sun</span>
                <span class="mon">Mon</span>
                <span class="tue">Tue</span>
                <span class="wed">Wed</span>
                <span class="thu">Thu</span>
                <span class="fri">Fri</span>
                <span class="sat">Sat</span>
            </div>

            <div class="days">
                <span class="day">12</span>
                <span class="day another current">13</span>
            </div>
        </div>
    </div>
`;

export default class Calendar extends HTMLElement {
    constructor() {
        super();
        this.daysInCalendar = 42;
        this.currentDate = new Date();
        this.currentYear = this.currentDate.getFullYear();
        this.currentMonth = this.currentDate.getMonth + 1;
        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }



    connectedCallback() {
        this.shadowRoot.querySelector('.date-input').addEventListener('focus', () => {
            this.shadowRoot.querySelector('.calendar').style.display = 'grid';
        });

        this.shadowRoot.querySelector('.calendar-background').addEventListener('click', () => {
            this.shadowRoot.querySelector('.calendar').style.display = 'none';
        });
    }

    showCalendar() {

    }


}

customElements.define('custom-calendar', Calendar);

