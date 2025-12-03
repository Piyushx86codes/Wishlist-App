let todoInput = document.querySelector(".input");
let addTodoButton = document.querySelector(".button");
let showTodos = document.querySelector(".todos-container");
let todo;
let todoList = [];


//function to create unique Id//npm install uuid
function uuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function parama(){
        let number = Math.random() * 16 | 0,
        randomNumber = param == 'x' ? number :(number & 0x3 | 0x8);
        return randomNumber.toString(16);

    });
}


addTodoButton.addEventListener("click", (e) => {
  e.preventDefault();
  todo = todoInput.value;

  if (todo.length > 0) {
    todoList.push({ id: uuid(), todo, isCompleted: false });
  }
  renderTodoList(todoList);
});

showTodos.addEventListener("click", (e) => {
  let key = e.target.dataset.key;
  todoList = todoList.map(todo => todo.id === key ? {...todo,isCompleted : !todo.isCompleted}:todo);
  renderTodoList(todoList);
  console.log(todoList);
});

function renderTodoList(todoList) {
  console.log(todoList);
  showTodos.innerHTML = todoList.map(
    ({id,todo,isCompleted}) =>
      `<div><input id="item-${id}" type="checkox" data-key=${id}<input/> <label for="item-${id}"class="todo todo-text t-pointer ${isCompleted ? "checked-todo" : ""}">${todo} data-key=${id}<label/><button><button/><div/>`
  );
}
renderTodoList(todoList);