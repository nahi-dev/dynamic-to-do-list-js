// ✅ Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function () {
  // ✅ Select DOM Elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // ✅ Create the addTask Function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // ✅ Create li and remove button
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // ✅ Remove functionality
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // ✅ Append to list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // ✅ Clear input
    taskInput.value = "";
  }

  // ✅ Attach Event Listeners
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
