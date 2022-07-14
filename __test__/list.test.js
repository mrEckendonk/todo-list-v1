import ListTodo from '../src/modules/list';

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