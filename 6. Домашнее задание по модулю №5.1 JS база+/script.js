document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

const tasksList = document.querySelector('#tasksList');

function loadTasks(){
  const name = JSON.parse(localStorage.getItem('name')) || [];
  const taskList = document.getElementById('taskList');

  const check = JSON.parse(localStorage.getItem('check')) || [];
  

name.forEach(task => {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${task}</span>
    <div>
    <input type = "checkbox"></button>
    <button onclick="editTask(this)">Редактировать</button>
    <button onclick="deleteTask(this)">Удалить</button>
    </div>
    `;
  taskList.appendChild(li);
})
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
  <input type = "checkbox" class=".check"></input>
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
  saveChecks();
}

function editTask(button) {
  const li = button.parentElement.parentElement;
  const taskText = li.querySelector('span').textContent;
  const newTaskText = prompt("Редактировать задачу", taskText);

  if(newTaskText !== null && newTaskText.trim() !== ""){
    li.querySelector('span').textContent = newTaskText.trim();
    saveTasks();
    saveChecks();

}
}

function saveChecks(){
  const taskList = document.getElementById('taskList');
  const check = Array.from(taskList.children).map(li => li.querySelector("input").checked);
  localStorage.setItem('check',JSON.stringify(check))
}