import './style.css';

const list = document.querySelector('.todo-items');

const myList = [
  {
    description: 'Need to wash my car',
    completed: false,
    index: 1,
  },
  {
    description: 'Watch my favorite movie',
    completed: false,
    index: 2,
  },
  {
    description: 'Go to the gym',
    completed: false,
    index: 3,
  },
  {
    description: 'Complete todo app',
    completed: false,
    index: 4,
  },
];

let todoList = '';

myList.forEach((item) => {
  todoList += `<li class="todo-li"><input type="checkbox">
    <p class="todo-edit" id="${item.index}">${item.description}</p>
    <i class="fas fa-trash icon trash"></i>
    <i class="fas fa-ellipsis-v icon drag"></i>
    </li>`;
});

list.innerHTML = todoList;
