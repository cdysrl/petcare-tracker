let currentTodoList = [];

// Function to add task to the list
function addTask() {
    const petName = document.getElementById('task-name').value; // Corrected to match HTML input ID
    const selectedOption = document.getElementById('todo-options').value;
    
    // Check if pet name is entered
    if (!petName) {
        alert("Please enter your pet's name.");
        return;
    }

    // Create a new task object
    const newTask = {
        task: selectedOption,
        petName: petName,
        completed: false // Initially, tasks are not completed
    };

    // Add task to the todo list
    currentTodoList.push(newTask);
    saveToLocalStorage();
    renderTodoList();
}

// Function to render the tasks dynamically
function renderTodoList() {
    console.log('Rendering Todo List')
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = ''; // Clear current list
    
    if (currentTodoList.length === 0) {
        // If the list is empty, show a message
        todoListElement.innerHTML = '<li>No tasks to show.</li>';
        return;
    }

    // Render the tasks in the currentTodoList
    currentTodoList.forEach((item, index) => {
        const taskElement = document.createElement('li');
        taskElement.classList.add('todo-item');
        
        taskElement.innerHTML = `
            <input type="checkbox" ${item.completed ? 'checked' : ''} 
            id="task-${index}" onclick="toggleCompletion(${index})">
            <span>${item.task}</span> <strong>for ${item.petName}</strong>
        `;
        
        todoListElement.appendChild(taskElement);
    });
}

// Function to toggle task completion
function toggleCompletion(index) {
    currentTodoList[index].completed = !currentTodoList[index].completed;
    saveToLocalStorage();
    renderTodoList();
}

// Function to save the todo list to localStorage
function saveToLocalStorage() {
    const todoData = {
        tasks: currentTodoList
    };
    localStorage.setItem('todoData', JSON.stringify(todoData));
}

// Function to load the todo list from localStorage
function loadFromLocalStorage() {
    const todoData = JSON.parse(localStorage.getItem('todoData'));

    if (todoData) {
        currentTodoList = todoData.tasks;
    }
    renderTodoList(); // Render the list after loading
}

// Call loadFromLocalStorage when the page is loaded
window.onload = loadFromLocalStorage;
