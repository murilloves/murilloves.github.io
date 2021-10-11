import { TASK_LIST } from "../TaskList/index.js";

const renderAddTaskContent = (hasError) => `
  <label id="new-task-label" for="new-task">
    <strong>Add Item</strong>
  </label>
  <div class="add-task">
    <input id="new-task" type="text"/>
    <button id="btn-add-task">Add</button>
  </div>
  <div id="has-error" >
    <label>
      Task should not be empty
    </label>
  </div>
`;

const mountAddTaskComponent = (document) => {
  const ContentAddTask = document.getElementById('content-add-task')

  ContentAddTask.innerHTML = renderAddTaskContent()
}

const addTask = (
  taskInput,
  hasError,
  tasks
) => {
  const description = taskInput.value
  if (!description) {
    taskInput.classList.add('hasError')
    hasError.classList.add('hasError')
    return
  }
  taskInput.classList.remove('hasError')
  hasError.classList.remove('hasError')

  tasks.push({
    description,
    complete: false,
    editing: false
  })

  localStorage.setItem(TASK_LIST, JSON.stringify(tasks));

  taskInput.value = "";
}


export { mountAddTaskComponent, addTask }
