import {
  editTask,
  deleteTask,
  taskCompleted,
  taskIncomplete,
  renderTaskItemContent
} from '../TaskItem/index.js'

const renderTaskListContent = (completeTasks, incompleteTasks) => `
  <h3>
    <strong>Todo</strong>
  </h3>
  <ul id="incomplete-tasks">
    ${incompleteTasks.map(task => renderTaskItemContent(task)).join('')}
  </ul>

  <h3>
    <strong>Completed</strong>
  </h3>
  <ul id="completed-tasks">
    ${completeTasks.map(task => renderTaskItemContent(task)).join('')}
  </ul>
`

const TASK_LIST = 'taskList'

const DEMO_TASK_LIST = [
  {
    description: 'Pay Bills',
    complete: false,
    editing: false,
  },
  {
    description: 'Go Shopping',
    complete: false,
    editing: false,
  },
  {
    description: 'See the Doctor',
    complete: true,
    editing: false,
  },
]

const mountTaskListComponent = (document) => {
  const ContentTaskList = document.getElementById('content-task-list')

  const taskList = getAllTasks()
  const [completeTasks, incompleteTasks] = getTasksByStatus(taskList)

  ContentTaskList.innerHTML = renderTaskListContent(completeTasks, incompleteTasks)

  bindAllTasks()
  return taskList
}

const getAllTasks = () => JSON.parse(localStorage.getItem(TASK_LIST)) || DEMO_TASK_LIST

const getTasksByStatus = (taskList) => {
  const completeTasks = [], incompleteTasks = []
  taskList.forEach(task => {
    task.complete
      ? completeTasks.push(task)
      : incompleteTasks.push(task)
  })

  return [completeTasks, incompleteTasks]
}

const bindAllTasks = () => {
  const incompleteTasksHolder = document.getElementById("incomplete-tasks");
  const completedTasksHolder = document.getElementById("completed-tasks");

  Array.from(incompleteTasksHolder.children).forEach(incompleteTask => {
    bindTaskEvents(incompleteTask, taskCompleted);
  })

  Array.from(completedTasksHolder.children).forEach(completeTask => {
    bindTaskEvents(completeTask, taskIncomplete);
  })
}

const bindTaskEvents = (taskListItem, checkBoxEventHandler, cb) => {
  let checkBox = taskListItem.querySelectorAll("input[type=checkbox]")[0];
  let editButton = taskListItem.querySelectorAll("button.edit")[0];
  let deleteButton = taskListItem.querySelectorAll("button.delete")[0];
  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
};


export { mountTaskListComponent, getAllTasks, TASK_LIST }
