let todoInput = document.querySelector(".input");
let addTodoButton = document.querySelector(".button");
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
  console.log(todo);
  if(todo.length > 0){
    todoList.push({id: uuid(),todo,isCompleted:false})
  }
  console.log(todoList);
});