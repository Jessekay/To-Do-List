import Style from './index.css';


// Get DOM
const listElement = document.createElement('div');
listElement.classList = 'dynamic-container';
const listContainer = document.querySelector('.list');

const task = [
  {
    description: 'task1',
    completed: false,
    index: 1,
  },
  {
    description: 'task2',
    completed: false,
    index: 2,
  },
  {
    description: 'task3',
    completed: false,
    index: 3,
  },
  {
    description: 'task4',
    completed: false,
    index: 4,
  },
];
