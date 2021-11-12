import Calendar from './components/custom-calendar-component.js';
import { TaskButtons } from './classes/task-buttons.js';
import  TasksList  from './classes/tasks-list.js';
import { Tags } from './classes/tags.js';

const tags = new Tags();
const tasksListElem = new TasksList();
const taskButtons = new TaskButtons(tasksListElem.taskList);

export { tags, tasksListElem, taskButtons }