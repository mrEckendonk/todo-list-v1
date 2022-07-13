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
