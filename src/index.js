import './index.css';

let todoList = window.localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
const inputItem = document.querySelector('.inputs-field');
const listContainer = document.querySelector('.list');
const addButton = document.querySelector('.add-btn');
const clearAll = document.querySelector('#clear-btn');

const displayToDoList = () => {
  listContainer.innerHTML = '';
  todoList.forEach((item, index) => {
    const listItem = document.createElement('div');
    listItem.className = 'list-properties';
    listItem.innerHTML = `
    <div class="both-sides">
      <span class="left-items">
        <input type="checkbox" ${item.completed ? 'checked' : ''}>
        <p>${item.description}</p>
      </span>
      <span class="right-items">
        <div id="remove-single"><i class="fa-solid fa-trash"></i></div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </span>
      </div>
    `;
    listItem.querySelector('#remove-single').addEventListener('click', (event) => {
      event.preventDefault();
      // eslint-disable-next-line no-use-before-define
      removeItem(index);
    });
    listItem.querySelector('input[type="checkbox"]').addEventListener('change', (event) => {
      event.preventDefault();
      // eslint-disable-next-line no-use-before-define
      markCompleted(index);
    });
    listContainer.appendChild(listItem);
  });
};

const saveTodoList = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};
const addItem = () => {
  const task = inputItem.value;
  if (task) {
    const taskItem = {
      description: task,
      completed: false,
      index: todoList.length+1
    };
    todoList.push(taskItem);
    inputItem.value = '';
    displayToDoList();
    saveTodoList();
  }
};

const markCompleted = (itemIndex) => {
  if (itemIndex >= 0 && itemIndex < todoList.length) {
    todoList[itemIndex].completed = true;
    displayToDoList();
    saveTodoList();
  }
};

// Remove items

const removeItem = (itemIndex) => {
  if (itemIndex >= 0 && itemIndex < todoList.length) {
    todoList.splice(itemIndex, 1);
    displayToDoList();
    saveTodoList();
  }
};

// Removed all completed tasks
const removeCompletedItems = () => {
  todoList = todoList.filter((item) => !item.completed);
  displayToDoList();
  saveTodoList();
};

addButton.addEventListener('click', addItem);
clearAll.addEventListener('click', removeCompletedItems);

window.onload = displayToDoList();