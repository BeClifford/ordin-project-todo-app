import "./styles.css";
import "./index.html";
import editImage from "../asset/edit-icon.svg";
import trashIcon from "../asset/trash-icon.svg";
import { saveTasks } from "./save.js";

// global variables
export const tasks = [];
const taskUl = document.getElementById("tasks-container");

// create class function to create the tasks
class createTasks {
  constructor(title, dueDate, priority) {
    (((this.id = crypto.randomUUID()),
    (this.title = title),
    (this.date = dueDate)),
      (this.priority = priority));
  }
}

function prioritySelect() {
  const priority = document.getElementById("priority-select").value;
  return priority;
}

// date funtions for variables and formatting
function dateDisplay() {
  const taskDate = document.getElementById("item-due-date");
  return taskDate.value;
}

// create task item
export function generateTaskItem() {
  const taskItem = document.getElementById("title").value;

  const selectedPriority = prioritySelect();
  const dueDate = dateDisplay();

  const task = new createTasks(taskItem, dueDate, selectedPriority);

  function appendTaskToArray() {
    tasks.push(task);
  }
  appendTaskToArray();
  saveTasks();
}

// render the items in the array to the interface
export function renderTask() {
  taskUl.innerHTML = "";

  function formattedDateForDispay(rawDate) {
    const dateObject = new Date(rawDate);
    const formatted = dateObject.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return formatted;
  }

  tasks.forEach((item) => {
    const itemContainer = document.createElement("li");
    itemContainer.classList.add("task-list");
    itemContainer.dataset.id = item.id;

    itemContainer.innerHTML = /*html*/ `
    <!-- Section for the task item, checklist and action buttons -->
    <section class="task-input">
      <div class="task-title">
        <span><input type="checkbox" class="checkbox"></span>
        <span class="task-item">${item.title}</span>
      </div>
      <div class="action-box">
        <button class="icon-button" type="button" aria-label="Edit task">
          <img src="${editImage}" alt="" class="edit-icon">
        </button>
        <button class="icon-button" type="button" aria-label="Delete task">
          <img src="${trashIcon}" alt="" class="delete-icon">
        </button>
      </div>
    </section>
      
    <section>
      <!-- date, priority etc... -->
       <div class="date-set">${item.date ? `<div>${formattedDateForDispay(item.date)}</div>` : ""}</div>
       <div class="priority-set">${item.priority ? `<div>${item.priority}</div>` : ""}</div>
    </section>      
    `;
    taskUl.appendChild(itemContainer);
  });
}
