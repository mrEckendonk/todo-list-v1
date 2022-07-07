export default class listTodo {
  constructor() {
    this.list = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
  }

  addTodo(todo) {
    todo.completed = false;
    todo.index = this.list.length + 1;
    this.list.push(todo);
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  removeTodo(index) {
    this.list = this.list.filter((item) => item.index !== index);
    this.list = this.list.map((item, i) => ({ ...item, index: i + 1 }));
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  updateTodo(todo) {
    this.list[todo.index - 1] = todo;
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  completed() {
    this.list = this.list.filter((item) => item.completed === false);
    this.list = this.list.map((item, i) => ({ ...item, index: i + 1 }));
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }
}