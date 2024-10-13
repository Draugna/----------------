document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

const tasksList = document.querySelector('#tasksList');

function loadTasks(){
  const name = JSON.parse(localStorage.getItem('name')) || [];
  const taskList = document.getElementById('taskList');


//Добавляем строки
  name.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <div>
      <button onclick="doneTask(this)">Выполнено</button>
      <button onclick="editTask(this)">Редактировать</button>
      <button onclick="deleteTask(this)">Удалить</button>
      </div>
      `;
    taskList.appendChild(li);
  })
//Подгшружаем Чекбоксы в их отмеченном состоянии
// const check = JSON.parse(localStorage.getItem('check')) || [];
// console.log(check)
//   check.forEach(checkbox => {
//     const checks = JSON.parse(localStorage.getItem('check'))
//     for (let i = 0; i < check.length ; i++) {
//       checkbox = checks[i];
//     }
      
//   })
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

if (taskText === '') return;

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `
  <span>${taskText}</span>
  <div>
  <button onclick="doneTask(this)">Выполнено</button>
  <button onclick="editTask(this)">Редактировать</button>
  <button onclick="deleteTask(this)">Удалить</button>
  </div>
  `
  taskList.appendChild(li);
  saveTasks();
  saveChecks();
  taskInput.value = "";
}

function saveTasks() {
  const taskList = document.getElementById('taskList');
  const name = Array.from(taskList.children).map(li => li.querySelector('span').textContent);
  localStorage.setItem('name',JSON.stringify(name));
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
  saveTasks();
}

function editTask(button) {
  const li = button.parentElement.parentElement;
  const taskText = li.querySelector('span').textContent;
  const newTaskText = prompt("Редактировать задачу", taskText);

  if(newTaskText !== null && newTaskText.trim() !== ""){
    li.querySelector('span').textContent = newTaskText.trim();
    saveTasks();

}
}


