//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listners
todoButton.addEventListener('click' ,addTodo );


//Functions
function addTodo(event){
    //prevent from submitting ::
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'heyt';
    newTodo.classList.add('todo-items');

    todoDiv.appendChild(newTodo);

    //CheckMark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i>fas fa-check </i>";
    completedButton.classList.add('complete-btn');
}