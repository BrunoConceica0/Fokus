import storage from "../../partial/localStorage.js";
export default (tasks) => {
  const btnRemoveCompleted = document.getElementById("btn-remover-concluidas");

  btnRemoveCompleted.addEventListener("click", (event) => {
    event.preventDefault();

    const selector = "app__section-task-list-item-complete";

    // Remove visualmente os itens do DOM
    document.querySelectorAll(`.${selector}`).forEach((li) => {
      li.remove();
    });

    // Obtém a lista atualizada do localStorage
    let tasks = storage.getLocalStorage("tasks");
    console.log(tasks);

    // Filtra tarefas que não estão completas
    tasks = tasks.filter((task) => !task.complete);

    // Atualiza o localStorage com a nova lista
    storage.setLocalStorage("tasks", tasks);
  });
};
