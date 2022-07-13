import listTodo from '../src/modules/list';
import { renderList } from '../src/index';

const toDolist = new listTodo();

document.body.innerHTML =
`<div class="container">
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
    </div>`
// describe('Add function', () => {
//   const toDolist = new listTodo();
//   renderList(toDolist);
  
//   test('Li items length should be 1', () => {
//     const newTodo = {
//       description: 'task one',
//     };
//     toDolist.addTodo(newTodo);
//     const list = document.querySelectorAll('.todo-li');
//     console.log(list);
//     expect(list).toHaveLength(1);
//   });
// });

// describe('test Render Function', () => {
//   const todos = new ListTodo();
//   todos.addTodo({ description: 'test' });
//   todos.addTodo({ description: 'test1' });
//   todos.addTodo({ description: 'test2' });
//   renderList(todos);
//   test('renderList', () => {
//     expect(document.querySelectorAll('.todo-li').length).toBe(3);
//   });
//   test('deletebutton', () => {
//     document.querySelector('li .trash').click();
//     expect(todos.list.length).toBe(2);
//   });
//   test('test checkbox', () => {
//     document.querySelector('li .checked').click();
//     expect(todos.list[0].completed).toBeTruthy();
//   });
// });