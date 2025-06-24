export default () => {
  const btnAddTaks = document.querySelector(".app__button--add-task");
  const formAddTask = document.querySelector(".app__form-add-task");
  const texteraTaks = document.querySelector(".app__form-textarea");

  const taks = [];

  btnAddTaks.addEventListener("click", () => {
    formAddTask.classList.toggle("hidden");
  });
  formAddTask.addEventListener("submit", (event) => {
    event.preventDefault();
    const taksDescription = {
      description: texteraTaks.value,
      completed: false,
    };
    taks.push(taksDescription);
    localStorage.setItem("taks", JSON.stringify(taks));
  });
};
