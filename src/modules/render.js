// Rendering Todos
const renderList = (todos) => {
  let todoList = '';
  todos.list.forEach((item) => {
    todoList += `<li class="todo-li"><input ${item.completed ? 'checked' : ''} type="checkbox" class="checked">
              <p contenteditable="true" class="todo-edit" id="${item.index}">${item.description}</p>
              <i class="fas fa-trash icon trash"></i>
              <i class="fas fa-ellipsis-v icon drag"></i>
            </li>`;
  });
  document.querySelector('.todo-items').innerHTML = todoList;

  const trash = document.querySelectorAll('.trash');
  trash.forEach((item) => {
    item.addEventListener('click', (e) => {
      const index = e.target.parentNode.querySelector('.todo-edit').id;
      todos.removeTodo(+index);
      renderList(todos);
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
      renderList(todos);
    });
  });

  const checked = document.querySelectorAll('.checked');
  checked.forEach((item) => {
    item.addEventListener('click', (e) => {
      const index = e.target.parentNode.querySelector('.todo-edit').id;
      const todo = todos.list.find((item) => item.index === +index);
      todo.completed = e.target.checked;
      todos.updateTodo(todo);
      renderList(todos);
    });
  });
};

export default renderList;