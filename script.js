document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load saved tasks from localStorage when page loads
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  // Add a task to the list and optionally save to localStorage
  function addTask(taskText, save = true) {
    taskText = taskText.trim();
    if (taskText === "") {
      alert("Please enter a task");
      return;
    }

    // Create list item and remove button
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    removeButton.onclick = function () {
      taskList.removeChild(li);
      if (save) {
        removeTaskFromStorage(taskText);
      }
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input
    if (save) taskInput.value = "";

    // Save task if required
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  // Remove task from localStorage array
  function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  // Attach event listeners
  addButton.addEventListener("click", function () {
    addTask(taskInput.value);
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(taskInput.value);
    }
  });

  // Load tasks initially
  loadTasks();
});
