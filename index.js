
const todos = [];

function addToDo() {
    const inputToDoElement = document.querySelector("#inputToDo");
    const title = inputToDoElement.value;

    todos.push({title: title, completed: false});

    renderTodos();

    console.log(todos);
}

//deleteTodo

function deleteTodo(index) {   

    todos.splice(index, 1);

    console.log(todos);
    
    renderTodos();
};

// Toggle to do

function setToggle(index) {
    todos[index].completed = !todos[index].completed;

    renderTodos();
};

function renderTodos() {
    const todoListElement = document.querySelector("#todoList");
    
    todoListElement.innerHTML= "";

    todos.forEach((todo, index) => {
        const listElement = document.createElement("li");
        listElement.innerHTML = `
            <p>${todo.title}</p>
            <p>${todo.completed ? "Completed" : "Pending"}</p>
            <button type="button" onclick="deleteTodo(${index})">Delete</button>
            <button type="button" onclick="setToggle(${index})">Toggle</button>
        `;

        todoListElement.appendChild(listElement);

    });
   
}



 


//4. If there is a value, create a new task

//5. 

