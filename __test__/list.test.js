import ListTodo from '../src/modules/list';
import renderList from '../src/modules/render';
const todoList = new ListTodo();

describe('Test the add function', () => {
  test('addTodo', () => {
    todoList.addTodo({ description: 'test' });
    expect(todoList.list.length).toBe(1);
  });
});

describe('test Remove Function', () => {
  test('removeTodo', () => {
    todoList.removeTodo(1);
    expect(todoList.list.length).toBe(0);
  });
});

describe('test Update Function', () => {
  test('updateTodo', () => {
    todoList.addTodo({ description: 'test' });
    todoList.updateTodo({ description: 'test1', index: 1, completed: false });
    expect(todoList.list[0].description).toBe('test1');
  });
  test('completed', () => {
    todoList.updateTodo({ description: 'test1', index: 1, completed: true });
    expect(todoList.list[0].completed).toBeTruthy();
  });
});

describe('test Clear/delete All', () => {
  test('clearCompleted', () => {
    todoList.completed();
    expect(todoList.list.length).toBe(0);
  });
});

document.body.innerHTML = `<div class="container">
<div class="container-title">
    <h1 class="title">Today's Todo</h1>
    <i class="icon fas fa-sync-alt restart"></i>
</div>
<div class="form-input">
    <input class="input" autofocus type="text" placeholder="Add to your list...">
    <i class="icon fas fa-sign-in-alt enter"></i>
</div>
<div class="tasks">
    <ul class="todo-items">

    </ul>
</div>
<div>
    <button class="clear-all">Clear all completed</button>
</div>
</div>`;

describe('test Render Function', () => {
  const todos = new ListTodo();
  todos.addTodo({ description: 'test' });
  todos.addTodo({ description: 'test1' });
  todos.addTodo({ description: 'test2' });
  renderList(todos);
  test('renderList', () => {
    expect(document.querySelectorAll('.todo-li').length).toBe(3);
  });
  test('deletebutton', () => {
    document.querySelector('li .trash').click();
    expect(todos.list.length).toBe(2);
  });
  test('test checkbox', () => {
    document.querySelector('li .checked').click();
    expect(todos.list[0].completed).toBeTruthy();
  });
});