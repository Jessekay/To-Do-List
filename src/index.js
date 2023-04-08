import './index.css';

// Get DOM
let todoList = window.localStorage.getItem('todoList') ? JSON.parse(window.localStorage.getItem('todoList')) : []
const inputItem = document.querySelector('.inputs-field')
const listContainer = document.querySelector('.list')
const listElement = document.createElement('div');

const addButton = document.querySelector('.add-btn')
const clearAll = document.querySelector('#clear-btn')
const addItem = () => {
    let task = inputItem.value;
    if(task) {
        let taskItem = {
            description: task,
            completed: false,
        }
        todoList.push(taskItem)
        inputItem.value = '';
        displayToDoList()
        saveTodoList()
    } 
}

const markCompleted = (itemIndex) => {
    if (itemIndex >= 0 && itemIndex < todoList.length) {
        todoList[itemIndex].completed = true;
        displayToDoList();
        saveTodoList()
    }
}

// Remove items

const removeItem = (itemIndex) => {
  if (itemIndex >= 0 && itemIndex < todoList.length) {
    todoList.splice(itemIndex, 1);
    displayToDoList();
    saveTodoList
  }
}

// Remove all completed tasks
const removeCompletedItems = () => {
  todoList = todoList.filter(item => !item.completed);
  displayToDoList();
  saveTodoList()
} 
const displayToDoList = () => {
  listContainer.innerHTML = '';
  todoList.forEach((item, index) => {
    const listItem = document.createElement('div');
    listItem.className = 'list-properties';
    listItem.innerHTML = `
      <span class="left-items">
        <input type="checkbox" ${item.completed ? 'checked' : ''}>
        <p>${item.description}</p>
      </span>
      <i class="fa-solid fa-ellipsis-vertical"></i>
      <button id="remove-single">-</button>
      <hr>
    `;
    listItem.querySelector('#remove-single').addEventListener('click', (event) => {
      removeItem(index)
    })
    listItem.querySelector('input[type="checkbox"]').addEventListener('change', (event) => {
      markCompleted(index);
    });
    listContainer.appendChild(listItem);
  });
  addButton.addEventListener('click', addItem)
clearAll.addEventListener('click', removeCompletedItems)

const saveTodoList = () => {
  window.localStorage.setItem('todoList', JSON.stringify(todoList));
}
}