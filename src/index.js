import './style.css';
import ListTodo from './modules/list';
import renderList from './modules/render';

const todos = new ListTodo();

const input = document.querySelector('.input');
input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13 && input.value.trim() !== '') {
    const newTodo = {
      description: input.value,
    };
    input.value = '';
    todos.addTodo(newTodo);
    renderList(todos);
  }
});

const clearAll = document.querySelector('.clear-all');
clearAll.addEventListener('click', () => {
  todos.completed();
  renderList(todos);
});

renderList(todos);
