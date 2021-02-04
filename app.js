//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listners
todoButton.addEventListener('click' ,addTodo );
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
    //prevent from submitting ::
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-items');

    todoDiv.appendChild(newTodo);

    //CheckMark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class= " fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPENDING TODODIV in TODO-LIST
    todoList.appendChild(todoDiv);
    todoInput.value = "";

}

function deleteCheck(event){
    const items = event.target;

    //deleting trash;
    if(items.classList[0] === "trash-btn") {
        const todo = items.parentElement;
        todo.remove();
    }

    if(items.classList[0] === "complete-btn"){
        const todo = items.parentElement;
        todo.classList.toggle('completed');
    }
}