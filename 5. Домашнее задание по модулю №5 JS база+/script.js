let tasks = [];

function addTask(name) {
  if (name == '') {
    console.log('Название задачи не может быть пустым!');
    return;
  }
  

  const newTask = {
    name: name,
    completed: false
  }

  tasks.push(newTask);
  console.log(`Задача "${name}" добавлена`);
}

function completedTask(){
  for (let i = 0; i < tasks.length; i++) {
    if(tasks[i].name == name) {
      tasks[i].completed = true;
      console.log(`Задача ${name} выполнена!`);
    }
  }

  console.log(`Задача ${name} не найдена`);
}

function deleteTask(name){
  for(let i = 0; i<tasks.length; i++) {
    if(tasks[i].name == name){
      tasks.splice(i, 1);
      console.log(`Задача ${name} удалена`)
    }
  }
  console.log(`Задача ${name} не найдена!`);
}

function showTasks(){
  if (tasks.length == 0) {
    console.log('Список задач пуст!');
  }
  for (let i = 0; i < tasks.length; i++) {
    const status = tasks[i].completed ? "Выполненна" : "Не выполнена";
    console.log(`Задача ${tasks[i].name}, статус: ${status}`);
  }
}