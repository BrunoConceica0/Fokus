export default () => {
  const btnAddTaks = document.querySelector(".app__button--add-task");
  const formAddTask = document.querySelector(".app__form-add-task");

  btnAddTaks.addEventListener("click", () => {
    formAddTask.classList.toggle("hidden");
  });
};
