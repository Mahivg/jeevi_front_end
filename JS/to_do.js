class TodoItem {
    constructor(todoDate, todoContent) {
        this.todoDate = todoDate;
        this.todoContent = todoContent;
    }
}

var todoList = [];

function addTodoItem() {
    const todoContent = document.getElementById('toDoTxt').value;
    if(todoContent.trim()) {
        const currentDate = (new Date()).toDateString();
        const newTodoItem = new TodoItem(currentDate, todoContent);
        todoList.push(newTodoItem);
        renderTodoList(todoList);
    }
}

/**
 *  <div class="to-do-item">
        <p class="to-do-date">Added Date</p>
        <p class="to-do-content">To do Item</p>
    </div>
 */

function renderTodoList(todoList) {
    const todoListContainer = document.getElementById('todoListContainer');
    todoListContainer.innerHTML = '';
    if(todoList != null && todoList.length > 0) {
        todoList.forEach((toDoItem) => {
            const todoItemDiv = document.createElement('div');
            todoItemDiv.classList.add('to-do-item');

            const pTodoDateElem = document.createElement('p');
            pTodoDateElem.classList.add('to-do-date');
            pTodoDateElem.textContent = toDoItem.todoDate;
            
            const pTodoContentElem = document.createElement('p');
            pTodoContentElem.classList.add('to-do-content');
            pTodoContentElem.textContent = toDoItem.todoContent;

            todoItemDiv.append(pTodoDateElem);
            todoItemDiv.append(pTodoContentElem);

            todoListContainer.append(todoItemDiv);
        });
    }
}
