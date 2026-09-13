import { tasks } from "./create-task";

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

// Callback function for the editTask() function
export function handleTaskClick(e) {
  // step 2: is this an edit-icon click?
  if (e.target.classList.contains("edit-icon")) {
    const itemClicked = e.target.closest(".task-list");
    const taskId = itemClicked.dataset.id;
    openEditDialog(taskId);
  }
}

function openEditDialog(taskId) {
  currentlyEditingId = taskId; // this sets the mode to editing

  // This opens the dialog and logs every detail in place
  openDialog(); // this function opens the modal
  const foundTask = tasks.find((item) => item.id === taskId);
  const taskItem = document.getElementById("title");
  const taskDate = document.getElementById("item-due-date");
  console.log(taskDate);
  const taskPriority = document.getElementById("priority-select");
  taskItem.value = foundTask.title;
  taskDate.value = foundTask.date;
  taskPriority.value = foundTask.priority;
}
