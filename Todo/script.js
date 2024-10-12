document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

function loadTasks(){
  const name = JSON.parse(localStorage.getItem('name')) || [];
  const taskList = document.getElementById('taskList');


  //Добавляем строки с кнопками
  name.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span id="toCrossOut">${task}</span>
      <input type='checkbox' name="toggleCheckbox">
      <button onclick="editTask(this)">Редактировать</button>
      <button onclick="deleteTask(this)">Удалить</button>
      `;
      taskList.appendChild(li);
  })
  filterTasks();
}

function addTask(){
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `
    <span id="toCrossOut">${taskText}</span>
    <input type='checkbox' name="toggleCheckbox">
    <button onclick="editTask(this)">Редактировать</button>
    <button onclick="deleteTask(this)">Удалить</button>
  `;
  taskList.appendChild(li);
  saveTasks();
  taskInput.value = "";
  filterTasks();
}

function saveTasks() {
  const taskList = document.getElementById('taskList');
  const name = Array.from(taskList.children).map(li => li.querySelector('span').textContent);
  localStorage.setItem('name',JSON.stringify(name));!
}

//Функция удаления
function deleteTask(button){
  const li = button.parentElement;
  li.remove();
  saveTasks();
  filterTasks();

}

function editTask(button){
  const li = button.parentElement;
  const taskText = li.querySelector('span').textContent;
  const newTaskText = prompt("Редактировать задачу", taskText);

  if(newTaskText !== null && newTaskText.trim() !== ""){
    li.querySelector('span').textContent = newTaskText.trim();
    saveTasks();
    filterTasks();
  }
}

function filterTasks(){
  const filterInput = document.getElementById('filterInput');
  const filterText = filterInput.value.toLowerCase();
  const taskList = document.getElementById('taskList');

  Array.from(taskList.children).forEach(li => {
    const taskText = li.querySelector("span").textContent.toLowerCase();
    if (taskText.includes(filterText)){
      li.style.display = "";
    } else {
      li.style.display = 'none';
    }
  })
}


function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}