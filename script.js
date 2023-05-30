/* const todoInput = document.querySelector("#todo-input");
const btnPlus = document.querySelector("#btn-Plus");
const todoList = document.querySelector(".todo-list");
const todoSearch = document.querySelector("#todo-search");
const eraseButton = document.querySelector("#erase-button");
const filterOptions = document.querySelector("#opcoes");

let idnumber = 0;

function createTaskElement(taskName) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  taskElement.setAttribute("id", "task" + idnumber);

  const taskText = document.createElement("h3");
  taskText.innerText = taskName;

  const taskButtons = document.createElement("div");
  taskButtons.classList.add("task-buttons");

  const finishButton = document.createElement("button");
  finishButton.classList.add("finish-todo");
  finishButton.innerHTML = '<i class="fas fa-check"></i>';
  finishButton.addEventListener("click", function () {
    taskElement.classList.toggle("done");
  });

  const editButton = document.createElement("button");
  editButton.classList.add("edit-todo");
  editButton.innerHTML = '<i class="fas fa-pen"></i>';
  editButton.addEventListener("click", function () {
    const currentText = taskText.innerText;
    const newText = prompt("Enter new task text:", currentText);
    if (newText !== null && newText !== "") {
      taskText.innerText = newText;
    }
  });

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-todo");
  removeButton.setAttribute("id", "btn" + idnumber);
  removeButton.innerHTML = '<i class="fas fa-times"></i>';
  removeButton.addEventListener("click", function () {
    taskElement.remove();
    if (todoList.childElementCount === 0) {
      todoList.style.display = "none";
    }
  });

  taskButtons.appendChild(finishButton);
  taskButtons.appendChild(editButton);
  taskButtons.appendChild(removeButton);

  taskElement.appendChild(taskText);
  taskElement.appendChild(taskButtons);

  idnumber++;
  return taskElement;
}

function addTask() {
  const taskName = todoInput.value.trim();
  if (taskName !== "") {
    const taskElement = createTaskElement(taskName);
    todoList.appendChild(taskElement);
    todoList.style.display = "block";
    todoInput.value = "";
  }
}

btnPlus.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});

todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

eraseButton.addEventListener("click", function () {
  todoSearch.value = "";
  filterTasks();
});

function filterTasks() {
  const filterValue = filterOptions.value;
  const searchValue = todoSearch.value.toLowerCase();
  const tasks = todoList.children;
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const taskText = task.querySelector("h3").innerText.toLowerCase();
    const taskIsDone = task.classList.contains("done");
    if (
      (filterValue === "all" ||
        (filterValue === "done" && taskIsDone) ||
        (filterValue === "todo" && !taskIsDone)) &&
      taskText.includes(searchValue)
    ) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  }
}

filterOptions.addEventListener("change", filterTasks);
todoSearch.addEventListener("input", filterTasks);
 */

/* criar um novo elemetento a cada clicaka com o mesmo numero do botton for  */

const todoInput = document.querySelector(`#todo-input`);
const btnPlus = document.querySelector(`#btn-Plus`);
const todoList = document.querySelector(".task-final");

let idnumber = 0;


btnPlus.addEventListener("click", function (e) {
  e.preventDefault();
  idnumber++;
  function valueInput() {
    if (todoInput.value.trim() == "") {
      todoInput.classList.toggle("color-red")
      todoInput.classList.add("color-red2")
      todoInput.placeholder = "Digite sua tarefa"


      return false
    } else {
      todoInput.classList.remove("color-red")
      todoInput.classList.remove("color-red2")
      todoInput.placeholder = "O que você vai fazer?"
      return todoInput.value
    }

  }
  if (valueInput()) {
    todoList.innerHTML += `  <div class="todo-list"> <div class=" test " id="task ${idnumber} ">
  <h3 class="edit-todo${idnumber}"> ${valueInput()} </h3>
  <div class="btn-taks">
    <button class="finish-todo">
      <i class="fa-solid fa-check"></i>
    </button>
    <button class="edit-todo${idnumber}  "  >
      <i class=" edit-todo${idnumber} fa-solid fa-pen "></i>
    </button>
    <button class="remove-todo" >
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div> 
</div> </div> `
  }
  todoInput.value = ""
  const removeTask = document.querySelectorAll(".remove-todo");
  const editTask = document.querySelectorAll(".todo-list");
  const taskComplete = document.querySelectorAll(".finish-todo")

  taskComplete.forEach((element) => {
    element.addEventListener("click", () => {
      taskCompleteGreen();
      function taskCompleteGreen() {
        const colorChange = element.parentElement.parentElement.parentElement;
        colorChange.classList.add("color-change")
      }

    });
  });
  editTask.forEach((edit) => {
    edit.addEventListener("click", (classes) => {
      const htmlElement = edit.querySelector("h3")
      if (htmlElement.classList.value === classes.target.classList.item(0)) {
        const textEditTask = prompt("DIGITE UM NOVO NOME PARA SUA TAREFA");
        if (textEditTask.trim() !== "") {
          htmlElement.textContent = textEditTask;
        } else {
          alert("ERRO: SUA TAREFA NÃO PODE SER VAZIA");
        }
      }
    })
  });
  removeTask.forEach((element) => {
    element.addEventListener("click", () => {
      taskRemove();
      function taskRemove() {
        return element.parentElement.parentElement.parentElement.remove();
      }
    });
  });
})











