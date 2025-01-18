var todos = ['Buy groceries', 'Clean room', 'Do laundry', 'Walk the dog'];

// <li class="todo-item">Buy groceries</li>


// <li class="todo-item">Buy groceries</li>
var liElement = document.createElement('li');
liElement.className = 'todo-item';
liElement.innerText = 'Buy groceries';


var ulElement = document.getElementById('todoitems9');
ulElement.appendChild(liElement);



console.log("sirikanta")
console.log(greetUser("Mani"))