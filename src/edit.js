import { tasks } from "./create-task";
import { saveTasks } from "./save";

export let currentlyEditingId = null; //this handles the mode of operation ie new task or editing

export function clearEditingId() {
  currentlyEditingId = null; // this is fine — we're inside the owning file
}

export function openDialog() {
  document.getElementById("edit-modal").showModal();
}

export function editTask() {
  const itemContainer = document.getElementById("tasks-container");

  itemContainer.addEventListener("click", handleTaskClick);
}

export function handleTaskClick(e) {
  // step 2: is this an edit-icon click?
  if (e.target.classList.contains("edit-icon")) {
    const itemClicked = e.target.closest(".task-list");
    const taskId = itemClicked.dataset.id;
    openEditDialog(taskId);
  }
}

function openEditDialog(taskId) {
  // steps 3-6: find task, populate input, show dialog

  currentlyEditingId = taskId; // this sets the mode to editing

  openDialog();
  const foundTask = tasks.find((item) => item.id === taskId);
  const taskItem = document.getElementById("title");
  const taskDate = document.getElementById("item-due-date");
  const taskPriority = document.getElementById("priority-select");
  taskItem.value = foundTask.title;
  taskDate.value = foundTask.date;
  taskPriority.value = foundTask.priority;
}
