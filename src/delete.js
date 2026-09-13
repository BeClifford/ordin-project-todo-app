import { tasks } from "./create-task";
import { renderTask } from "./create-task";
import { saveTasks } from "./save";

export function deleteTask() {
  const itemContainer = document.getElementById("tasks-container");
  itemContainer.addEventListener("click", deleteFoundTask);
}

export function deleteFoundTask(e) {
  if (e.target.classList.contains("delete-icon")) {
    // alert("event working...");
    const taskContainer = e.target.closest(".task-list");
    const taskToDeleteId = taskContainer.dataset.id;

    // find the item's ID in the task
    const matchingIdIndex = tasks.findIndex(
      (item) => item.id === taskToDeleteId,
    );
    tasks.splice(matchingIdIndex, 1); // this uses the index of the id found and deletes it from the array
    saveTasks();
    renderTask();
  }
}
