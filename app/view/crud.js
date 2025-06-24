import createTask from "../view/createTask.js";
export default () => {
  const btnAddTaks = document.querySelector(".app__button--add-task");
  const formAddTask = document.querySelector(".app__form-add-task");
  const texteraTask = document.querySelector(".app__form-textarea");

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(tasks);

  btnAddTaks.addEventListener("click", () => {
    formAddTask.classList.toggle("hidden");
  });
  formAddTask.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = {
      description: texteraTask.value || "Tarefa sem descrição",
      completed: false,
    };
    tasks.push(taskDescription);
    createTask(taskDescription.description);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    texteraTask.value = "";
    formAddTask.classList.add("hidden");
  });

  tasks.forEach((task) => {
    if (
      task &&
      typeof task.description === "string" &&
      task.description.trim() !== ""
    ) {
      createTask(task.description);
    } else {
      console.warn("Tarefa inválida:", task);
    }
  });
};
