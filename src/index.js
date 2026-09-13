import "./styles.css";
import "./index.html";
import { addBtn } from "./home.js";
import { generateTaskItem, renderTask, tasks } from "./create-task.js";
import {
  editTask,
  openDialog,
  currentlyEditingId,
  clearEditingId,
} from "./edit.js";

import { deleteTask } from "./delete.js";
import { saveTasks, getSavedTasks } from "./save.js";

document.addEventListener("DOMContentLoaded", () => {
  getSavedTasks();
  renderTask();
});

addBtn();
// addToMain();

// global variables
const addTaskBtn = document.querySelector(".add-task-btn");

// add click event to add button to open dialog
addTaskBtn.addEventListener("click", () => {
  openDialog();
});

// add click event on submit button in dialog.
// it add the new inputted task to the array
export function submitTask() {
  const submitBtn = document.querySelector(".add-task");

  submitBtn.addEventListener("click", function (e) {
    if (currentlyEditingId) {
      const itemToUpdate = tasks.find((item) => item.id === currentlyEditingId);
      const updatedTaskItem = document.getElementById("title").value;
      itemToUpdate.title = updatedTaskItem;
      itemToUpdate.date = document.getElementById("item-due-date").value; //this updates the date to the new set date
      itemToUpdate.priority = document.getElementById("priority-select").value; //this updates the priority to the new set priority
      saveTasks();
      displayTask(e);
      clearEditingId();
      document.getElementById("item-due-date").value = "";
      document.getElementById("priority-select").value = "";
    } else {
      // clear dates and priority
      generateTaskItem();
      saveTasks();
      displayTask(e);
    }
  });

  function displayTask(e) {
    renderTask();
    document.getElementById("title").value = "";
    document.querySelector(".my-dialog").close();
  }
}

submitTask();

editTask();

deleteTask();
