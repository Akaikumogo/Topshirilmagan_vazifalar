
const titleInput = document.querySelector('#inp_title');
const descInput = document.querySelector('#inp_desc');
const sendButton = document.querySelector('#send');
const resultContainer = document.querySelector('.result_container');

function createTodoObject(title, description) {
  const todoObject = {
    id: new Date().getTime().toString(), 
    title: title,
    description: description,
    date: new Date().getTime()
  };
  return todoObject;
}

function saveTodoList(todoList) {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function getTodoList() {
  let todoList = localStorage.getItem('todoList');
  if (todoList) {
    todoList = JSON.parse(todoList);
  } else {
    todoList = [];
  }
  return todoList;
}

function renderTodoList(todoList) {
  resultContainer.innerHTML = '';
  todoList.forEach(todo => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');
    todoElement.innerHTML = `
      <div class="todo_main">
        <div class="title"><h1>${todo.title}</h1></div>
        <div class="description">${todo.description}</div>
      </div>
      <div class="bottom">
        <div class ="date">
          <h4>Date:</h4>
          <p>${new Date(todo.date).toLocaleString()}</p>
        </div>
        <i class="fa-regular fa-trash" style="color: #4a4a4a;cursor: pointer;" data-id="${todo.id}"></i>
      </div>
    `;
    const deleteButton = todoElement.querySelector('.fa-trash');
    deleteButton.addEventListener('click', function() {
      const todoId = this.getAttribute('data-id');
      const todoList = getTodoList();
      const updatedTodoList = todoList.filter(todo => todo.id !== todoId);
      saveTodoList(updatedTodoList);
      renderTodoList(updatedTodoList);
    });
    resultContainer.appendChild(todoElement);
  });
}
sendButton.addEventListener('click', function(e) {
  e.preventDefault();
  const title = titleInput.value;
  const description = descInput.value;
  if (title && description) {
    const todoList = getTodoList();
    const todoObject = createTodoObject(title, description);
    todoList.push(todoObject);
    saveTodoList(todoList);
    renderTodoList(todoList);
    titleInput.value = '';
    descInput.value = '';
  } else {
    alert("Sarlavha va batafsil ma'lumotni kiriting");
  }
});
const todoList = getTodoList();
renderTodoList(todoList);