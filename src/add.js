// import './index.css'

// const todoList = [];
// const inputItem = document.querySelector('.inputs-field')
// const listContainer = document.querySelector('.list')
// const listElement = document.createElement('div');
// const addButton = document.querySelector('.add-btn')
// const addItem = () => {
//     let task = inputItem.value;
//     if(task) {
//         let taskItem = {
//             description: task,
//             completed: false,
//         }
//         todoList.push(taskItem)
//         inputItem.value = '';
//         displayToDoList()
//     } 
// }

// const markCompleted = (itemIndex) => {
//     if (itemIndex >= 0 && itemIndex < todoList.length) {
//         todoList[itemIndex].completed = true;
//         displayToDoList();
//     }
// }

// const displayToDoList = () => {
//   listContainer.innerHTML = '';
//   todoList.forEach((item, index) => {
//     const listItem = document.createElement('div');
//     listItem.className = 'list-properties';
//     listItem.innerHTML = `
//       <span class="left-items">
//         <input type="checkbox" ${item.completed ? 'checked' : ''}>
//         <p>${item.description}</p>
//       </span>
//       <i class="fa-solid fa-ellipsis-vertical"></i>
//       <hr>
//     `;
//     listItem.querySelector('input[type="checkbox"]').addEventListener('change', (event) => {
//       markCompleted(index);
//     });
//     listContainer.appendChild(listItem);
//   });
// }



// addButton.addEventListener('click', addItem)