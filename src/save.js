import { tasks } from "./create-task";

export function saveTasks() {
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// this uses the asynchronous JS but yet to understand it
// remember to recomment this
// this is for rendering
export function getSavedTasks() {
  const storedTasks = localStorage.getItem("myTasks");

  //   if the local storage origin is empty, end the function
  if (!storedTasks) {
    return;
  }

  //   comment later
  try {
    const savedTasks = JSON.parse(storedTasks);

    if (Array.isArray(savedTasks)) {
      tasks.splice(0, tasks.length, ...savedTasks);
    }
  } catch {
    localStorage.removeItem("myTasks");
  }
}
