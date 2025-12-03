let todoInput = document.querySelector(".input");
let addTodoButton = document.querySelector(".button");
let showTodos = document.querySelector(".todos-container");
let todo;
let localData = JSON.parse(localStorage.getItem("todo"));
let todoList = localData || [];


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
  todoInput.value ="";
});

showTodos.addEventListener("click", (e) => {
  let key = e.target.dataset.key;
  let deltodokey = e.target.dataset.todokey;
  todoList = todoList.map(todo => todo.id === key ? {...todo,isCompleted : !todo.isCompleted}:todo);
  todoList = todoList.filter(todo => todo.id !== deltodokey);
  renderTodoList(todoList);
  localStorage.setItem("todo",JSON.stringify(todoList));
  console.log(todoList);
});

function renderTodoList(todoList) {
  console.log(todoList);
  showTodos.innerHTML = todoList.map(
    ({ id, todo, isCompleted }) =>
      `<div class=" todo relative"><input  class ="t-checkbox t-pointer "id="item-${id}" type="checkox" data-key=${id} ${
        isCompleted ? "checked" : ""
      }<input/> <label for="item-${id}"class="todo todo-text t-pointer ${
        isCompleted ? "checked" : ""
      }">${todo} data-key=${id}<label/><button class="absolute right-0" class="button cursor"> <span data-todokey = ${id} class="material-symbols-outlined">
delete
</span>
<button/><div/>`
  );
}
renderTodoList(todoList);