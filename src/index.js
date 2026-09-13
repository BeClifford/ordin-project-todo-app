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

// add click event on submit button in dialog
export function submitTask() {
  const submitBtn = document.querySelector(".add-task");

  submitBtn.addEventListener("click", function (e) {
    if (currentlyEditingId) {
      const itemToUpdate = tasks.find((item) => item.id === currentlyEditingId);
      const updatedTaskItem = document.getElementById("title").value;
      item.title = updatedTaskItem;
      saveTasks();
      displayTask(e);
      clearEditingId();
      // clear dates and priority
    } else {
      generateTaskItem();
      displayTask(e);
      // clear dates and priority
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
