let form = document.querySelector(".add-tasks");
let inputValue = document.querySelector("#tasks-input");
let todolist = document.querySelector("#todo-task");
let tasks = document.querySelectorAll(".text");
let taskContainer = document.querySelectorAll(".task-container");

tasks.forEach(task => {
  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
});

taskContainer.forEach(container => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    let insertingtask = inserTask(container, e.clientY);
    let curTask = document.querySelector(".dragging");

    if (!insertingtask) {
      container.appendChild(curTask);
    } else {
      container.insertBefore(curTask, insertingtask);
    }
  });
});

let inserTask = (container, mouseY) => {
  let alltask = container.querySelectorAll(".text:not(.dragging)");
  let closesttask = null;
  let closestoffset = Number.NEGATIVE_INFINITY;
  alltask.forEach(task => {
    let { top } = task.getBoundingClientRect();
    let offset = mouseY - top;

    if (offset < 0 && offset > closestoffset) {
      closestoffset = offset;
      closesttask = task;
    }
  });
  return closesttask;
};

form.addEventListener("submit", e => {
  e.preventDefault();
  let input = inputValue.value;
  if (!input) return;
  let task = document.createElement("div");
  task.classList.add("text");
  task.setAttribute("draggable", "true");
  task.innerHTML = `
    <p class="task" contenteditable="true"> ${input} </p>
    <i class="material-icons" style="font-size:18px;">delete</i>
`;

  todolist.appendChild(task);
  console.log(task);

  inputValue.value = "";

  task.querySelector("i").addEventListener("click", () => {
    task.remove();
  });

  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
});

document.querySelectorAll(".btns").forEach(button => {
  button.addEventListener("click", () => {
    let task = document.createElement("div");
    let parentContainer = button.parentNode;

    task.classList.add("text");
  task.setAttribute("draggable", "true");
  task.innerHTML = `
  <p class="task" contenteditable="true" style="border:none; spellcheck="false""></p>
    <i class="material-icons" style="font-size:18px;">delete</i>
`;

  parentContainer.appendChild(task);

  let inputBox = task.querySelector(".task");
    inputBox.focus();


  task.querySelector("i").addEventListener("click", () => {
    task.remove();
  });

   
  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");

  });
  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
});
});