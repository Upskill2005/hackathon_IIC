document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const categorySelect = document.getElementById("categorySelect");
    const deadlineInput = document.getElementById("deadlineInput");
    const prioritySelect = document.getElementById("prioritySelect");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");
    const filterCategory = document.getElementById("filterCategory");
    const filterPriority = document.getElementById("filterPriority");

    // Function to create a task element
    function createTaskElement(task) {
        const li = document.createElement("li");
        li.textContent = `${task.name} | Category: ${task.category} | Deadline: ${task.deadline} | Priority: ${task.priority}`;
        return li;
    }

    // Add task event
    addBtn.addEventListener("click", function() {
        const taskName = taskInput.value.trim();
        const category = categorySelect.value;
        const deadline = deadlineInput.value;
        const priority = prioritySelect.value;

        if (taskName === "") {
            alert("Please enter a task name.");
            return;
        }

        const task = {
            name: taskName,
            category: category,
            deadline: deadline,
            priority: priority,
        };

        // Create and append the task element
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);

        // Clear the input fields
        taskInput.value = "";
        categorySelect.selectedIndex = 0;
        deadlineInput.value = "";
        prioritySelect.selectedIndex = 0;
    });

    // Filter tasks
    function filterTasks() {
        const filterCategoryValue = filterCategory.value;
        const filterPriorityValue = filterPriority.value;

        const tasks = taskList.getElementsByTagName("li");
        for (let i = 0; i < tasks.length; i++) {
            const taskText = tasks[i].textContent.toLowerCase();
            const showCategory = filterCategoryValue === "all" || taskText.includes(filterCategoryValue);
            const showPriority = filterPriorityValue === "all" || taskText.includes(filterPriorityValue);

            tasks[i].style.display = (showCategory && showPriority) ? "list-item" : "none";
        }
    }

    // Event listeners for filtering
    filterCategory.addEventListener("change", filterTasks);
    filterPriority.addEventListener("change", filterTasks);
});
