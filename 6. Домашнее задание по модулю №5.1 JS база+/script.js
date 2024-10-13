document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

function loadTasks(){
  const name = JSON.parse(localStorage.getItem('name')) || [];
  const taskList = document.getElementById('taskList');


//Добавляем строки
  name.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <div>
      <input type="checkbox"></input>
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
  <input type="checkbox"></input>
  <button onclick="editTask(this)">Редактировать</button>
  <button onclick="deleteTask(this)">Удалить</button>
  </div>
  `
  taskList.appendChild(li);


taskInput.value = "";
}
