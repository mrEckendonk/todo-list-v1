import './style.css';
import ListTodo from './modules/list';


const todos = new ListTodo();

const renderList = () => {
  let todoList = '';
  todos.list.forEach((item) => {
    todoList += `<li class="todo-li"><input ${item.completed ? 'checked' : ''}  type="checkbox" class="checked">
          <p contenteditable="true" class="todo-edit" id="${item.index}">${item.description}</p>
          <i class="fas fa-trash icon trash"></i>
          <i class="fas fa-ellipsis-v icon drag"></i>
        </li>`;
  });
  document.querySelector('.todo-items').innerHTML = todoList;

  const input = document.querySelector('.input');
  input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 && input.value.trim() !== '') {
      const newTodo = {
        description: input.value,
      };
      input.value = '';
      todos.addTodo(newTodo);
      renderList();
    }
  });

  const checkbox = document.querySelectorAll('.checked');
  checkbox.forEach((item) => {
    item.addEventListener('click', (e) => {
      const index = e.target.parentNode.querySelector('.todo-edit').id;
      const todo = todos.list.find((item) => item.index === +index);
      todo.completed = e.target.checked;
      todos.updateTodo(todo);
      renderList();
    });
  });

  const trash = document.querySelectorAll('.trash');
  trash.forEach((item) => {
    item.addEventListener('click', (e) => {
      const index = e.target.parentNode.querySelector('.todo-edit').id;
      todos.removeTodo(+index);
      renderList();
    });
  });

  const edit = document.querySelectorAll('.todo-edit');
  edit.forEach((item) => {
    item.addEventListener('blur', (e) => {
      const index = e.target.id;
      if (e.target.innerText.trim() === '') {
        e.target.innerText = todos.list[+index - 1].description;
        return;
      }

      const description = e.target.innerText;
      const todo = {
        description,
        index,
      };
      todos.updateTodo(todo);
      renderList();
    });
  });

  const clearAll = document.querySelector('.clear-all');
  clearAll.addEventListener('click', () => {
    todos.completed();
    renderList();
  });
};

renderList();
