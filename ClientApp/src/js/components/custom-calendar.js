const template = document.createElement('template');
template.innerHTML = `
<style>
.calendar-container {
    color: var(--text-color);

    position: relative;

    box-sizing: border-box;

    --row-height: 50px;
    --column-widht: 50px;
    --bg-color: #2f3337;
    --text-color: #afafaf;
}

.calendar-background {
    display: none;


    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, .6);
}

.calendar {
    display: none;
    grid-template-columns: repeat(7, var(--column-widht));
    grid-template-rows: repeat(8, var(--row-height));

    align-items: center;
    justify-items: center;

    padding-top: 1em;

    position: fixed;
    bottom: 8px;
    right: 8px;

    z-index: 1;

    border-radius: .4em;
    background-color: var(--bg-color);
    box-shadow: 0 0 5px #6841da;
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
    fill:rgba(255, 255, 255, 1);
}

.clear-date-btn__icon,
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
    text-align: center;
}

.day {
    display: inline-block;
    padding: .8em;

    width: 18px;
    height: 18px;

    color: rgba(255, 255, 255, .2);

    background-color: transparent;
    border-radius: 50%;
    border: 1px solid transparent;

    cursor: pointer;
    user-select: none;
    pointer-events: none;
}

.current-month {
    color: rgba(255, 255, 255, .8);
    pointer-events: auto;
}

.current-day {
    border: 1px solid rgba(255, 255, 255, .8);
    border-radius: 50%;
    background-color: rgba(255, 255, 255, .08);
}

.day:hover,
.selected-day {
    color: rgba(255, 255, 255, .8);
    border: 1px solid #ededed;
    border-radius: 50%;
    background-color: #6841da;
}

.calendar__date {
    display: flex;
    align-items: center;

}

.calendar__date-label {
    color: var(--text-color);
    cursor: pointer;
}

.calendar__date-label:hover {
    color: rgba(255, 255, 255, 1);
}

.calendar__clear-date-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
    margin: 0 0 0 .4em;


    border: none;
    outline: none;

    background-color: var(--bg-color);
    cursor: pointer;
}

.calendar__clear-date-btn:hover .clear-date-btn__icon {
    fill:rgba(255, 255, 255, 1);
}

.clear-date-btn__icon {
    margin-top: .1em;
}

</style>
<div class="calendar-container">
        <div class="calendar-background"></div>
        <div class="calendar__date">
            <span class="calendar__date-label" id="date-label">dd/mm/yyyy</span>
            <button class="calendar__clear-date-btn" id="clear-date-button">
                 <svg class="clear-date-btn__icon" viewBox="0 0 24 24"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"/></svg>
            </button>
        </div>
        <div class="calendar">
            <div class="calendar-header">
                <button class="changeMonth prev" id="prevBtn">
                    <svg class="btn-icon" viewBox="0 0 512.002 512.002">
                        <path
                            d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105 L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795
                                                                			l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z" />
                        </svg>
                </button>
                <div class="current-date">12 December 2021</div>
                <button class="changeMonth" id="nextBtn">
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
        this.currentMonth = this.currentDate.getMonth();
        this.currentDate = this.currentDate.getDate();
        this.monthIncrement = 0;
        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.date = null;

        this.dateLabel = this.shadowRoot.querySelector('.calendar__date-label');
        this.clearDateLabelButton = this.shadowRoot.querySelector('#clear-date-button');

        this.calendar = this.shadowRoot.querySelector('.calendar');
        this.calendarCurrentDate = this.calendar.querySelector('.current-date');
        this.calendarBackground = this.shadowRoot.querySelector('.calendar-background');
        this.days = this.calendar.querySelector('.days');
        this.selectedDate = null;

        this.prevSelected = null;

        this.nextBtn = this.calendar.querySelector('#nextBtn');
        this.prevBtn = this.calendar.querySelector('#prevBtn');
    }

    connectedCallback() {
        this.dateLabel.addEventListener('click', () => {
            this.monthIncrement = 0;
            this.date = this.setDate();
            this.showCalendar(this.calendar, this.calendarBackground);
            this.setCalendar(this.date, this.selectedDate);
         });
         this.calendarBackground.addEventListener('click', () => {
             this.closeCalendar(this.calendar, this.calendarBackground);
         });

         this.nextBtn.addEventListener('click', () => {
             this.monthIncrement++;
             this.date = this.setDate();
             this.setCalendar(this.date, this.selectedDate);
         });
         this.prevBtn.addEventListener('click', () => {
             this.monthIncrement--;
             this.date = this.setDate();
             this.setCalendar(this.date, this.selectedDate);
         });

        this.days.addEventListener('click', (events) => {
            if(events.target.className.includes('current-month')) {
                this.setDateLabel(this.date, this.dateLabel, events.target.textContent);
                this.selectedDate = this.setSelectedDate(this.date, events.target.textContent);
                if(this.prevSelected !== null) {
                    this.prevSelected.classList.remove('selected-day');
                    this.prevSelected = events.target;
                    this.prevSelected.classList.add('selected-day');
                } else {
                    this.prevSelected = events.target;
                    this.prevSelected.classList.add('selected-day');
                }
            }
        });

        this.clearDateLabelButton.addEventListener('click', () => {
            this.dateLabel.textContent = 'dd/mm/yyyy';
            this.selectedDate = null;
        })
        this.date = this.setDate();
    }

    setCalendar(date, selectedDate) {
        this.clearDates();
        this.displayCurrentDateInCalendarHeader(date);
        this.displayMonth(date, selectedDate);
    }

    setDate() {
        return new Date(this.currentYear, this.currentMonth + 1 + this.monthIncrement, 0);
    }

    setSelectedDate(date, selectedDay) {
        return new Date(date.getFullYear(), date.getMonth(), selectedDay);
    }

    displayMonth(date, selectedDate) {
        let daysFromPrevMonth = this.countOfDaysFromPrevMonth();
        let daysInThisMonth = this.daysInMonth(date);
        let daysIncrement = 1;
        let nextMonthDays = 1;
        for(let i = 0; i < 6; i++) {
            for(let j = 0; j < 7; j++) {
                let span = document.createElement('span');
                span.style.gridRow = `${i + 1} / ${i + 2}`;
                span.style.gridColumn = `${j + 1} / ${j + 2}`;
                span.classList += 'day';
                if(daysFromPrevMonth >= 0) {
                    span.textContent = this.datesFromPrevMonth(daysFromPrevMonth);
                    daysFromPrevMonth--;
                } else {
                    if(daysIncrement <= daysInThisMonth) {
                        span.textContent = daysIncrement;
                        span.classList.add('current-month');
                        this.checkSelectedDay(span, date, selectedDate, daysIncrement);
                        if(this.currentDate === daysIncrement && this.monthIncrement === 0) {
                            span.classList.add('current-day');
                        }
                        daysIncrement++;
                    }
                    else {
                        span.textContent = nextMonthDays;
                        nextMonthDays++;
                    }
                }
                this.days.appendChild(span);
            }

        }
    }

    checkSelectedDay(element, date, selectedDate, day) {
        if(selectedDate !== null && date.getFullYear() === selectedDate.getFullYear()
             && date.getMonth() === selectedDate.getMonth() && day === selectedDate.getDate()) {
                element.classList.add('selected-day');
        }
    }


    clearDates() {
        this.days.innerHTML = '';
        this.calendarCurrentDate.textContent = '';
    }

    displayCurrentDateInCalendarHeader(date) {
        this.calendarCurrentDate.textContent = date.toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'long'
        });
    }

    setDateLabel(date, dateLabel, text) {
        let month = date.getMonth();
        let year = date.getFullYear();
        let outputDate = `${text}/${month+ 1}/${year}`;

        dateLabel.textContent = outputDate;
    }

    daysInMonth(date) {
        return date.getDate();
    }

    countOfDaysFromPrevMonth() {
        return new Date(this.currentYear, this.currentMonth + this.monthIncrement, 0).getDay();
    }

    datesFromPrevMonth(countOfDays) {
        return new Date(this.currentYear, this.currentMonth + this.monthIncrement, -countOfDays).getDate();
    }

    showCalendar(calendar, background) {
        calendar.style.display = 'grid';
        background.style.display = 'block';
    }

    closeCalendar(calendar, background) {
        calendar.style.display = 'none';
        background.style.display = 'none';
    }
}

customElements.define('custom-calendar', Calendar);

