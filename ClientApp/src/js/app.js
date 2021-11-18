import Calendar from './components/custom-calendar-component.js';
import TaskView from './classes/task-view.js';
import TaskService from './classes/task-service.js';
import  TaskButtons  from './classes/task-buttons.js';
import  TasksList  from './classes/tasks-list.js';
import  Tags  from './classes/tags.js';
import Search from './classes/search.js';

const tags = new Tags();
const tasksListElem = new TasksList();
const taskView = new TaskView(tasksListElem.taskList);
const taskService = new TaskService(taskView);
const taskButtons = new TaskButtons(tasksListElem.taskList, taskService);
const search = new Search(tasksListElem.taskList, taskView);

export { tags, tasksListElem, taskButtons, taskView, taskService }