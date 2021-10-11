import { mountTaskListComponent, getAllTasks, TASK_LIST } from "../TaskList/index.js";

const renderTaskItemContent = (task) => `
  <li id="${task.description}">
    <input type="checkbox" ${task.complete ? 'checked="true"' : ''} />
    <input type="text" value="${task.description}" />
    <label>${task.description}</label>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  </li>
`

const editTask = function (el) {
  const selectedItem = el.target.parentNode
  let editInput = selectedItem.querySelectorAll("input[type=text]")[0];
  let label = selectedItem.querySelector("label");
  let button = selectedItem.getElementsByTagName("button")[0];

  const containsClass = selectedItem.classList.contains("editMode");
  if (containsClass) {
    label.innerText = editInput.value
    button.innerText = "Edit";
  } else {
    editInput.value = label.innerText
    button.innerText = "Save";
  }

  const taskList = getAllTasks()
  const updatedTaskList = taskList.map(item => {
    if(item.description == selectedItem.id) {
      item.description = containsClass ? label.innerText : editInput.value
    }
    return item
  })
  localStorage.setItem(TASK_LIST, JSON.stringify(updatedTaskList));

  selectedItem.classList.toggle("editMode");
};

const deleteTask = (el) => {
  const selectedItem = el.target.parentNode;
  const taskList = getAllTasks()

  const updatedTaskList = taskList.filter(item => item.description != selectedItem.id)
  localStorage.setItem(TASK_LIST, JSON.stringify(updatedTaskList));

  mountTaskListComponent(document)
};

const taskCompleted = (el) => {
  const selectedItem = el.target.parentNode;
  const taskList = getAllTasks()

  const updatedTaskList = taskList.map(item => {
    if(item.description == selectedItem.id) {
      item.complete = true
    }
    return item
  })

  localStorage.setItem(TASK_LIST, JSON.stringify(updatedTaskList));
  mountTaskListComponent(document)
};

const taskIncomplete = (el) => {
  const selectedItem = el.target.parentNode;
  const taskList = getAllTasks()

  const updatedTaskList = taskList.map(item => {
    if(item.description == selectedItem.id) {
      item.complete = false
    }
    return item
  })

  localStorage.setItem(TASK_LIST, JSON.stringify(updatedTaskList));
  mountTaskListComponent(document)
};


export { editTask, renderTaskItemContent, deleteTask, taskCompleted, taskIncomplete }
