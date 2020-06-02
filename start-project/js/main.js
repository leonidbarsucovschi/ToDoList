// 1. Находим форму на странице
const form = document.querySelector('#newTaskForm');
const button = document.querySelector('button');
const taskListUl = document.querySelector('#tasksList')



form.addEventListener('submit', (event) => {
    event.preventDefault();


    const taskInput = document.querySelector('#addNewTask');
    const taskText = taskInput.value;

    const taskHTML = `
    <li class="list-group-item d-flex justify-content-between">
        <span class="task-title">${taskText}</span>
        <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
        </li>
    `;


   taskListUl.insertAdjacentHTML('afterbegin', taskHTML);
   taskInput.value = '';




   button.addEventListener('click', () =>{
       console.log('error');
   });





});





