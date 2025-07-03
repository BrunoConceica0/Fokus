import storage from "../../partial/localStorage.js";
const btnRemoveCompleted = document.getElementById("btn-remover-concluidas");
const removeAllTasks = document.getElementById("btn-remover-todas");

export default () => {
  const removeTask = (completed) => {
    // Se completed for true,  vai remover somente as tarefas completas,se for false, vai remover todas as tarefas
    let selector = completed
      ? "app__section-task-list-item-complete"
      : "app__section-task-list-item";

    // Remove visualmente os itens do DOM
    document.querySelectorAll(`.${selector}`).forEach((li) => {
      li.remove();
    });

    // Obtém a lista atualizada do localStorage
    let tasks = storage.getLocalStorage("tasks");
    console.log(tasks);

    // Filtra tarefas que não estão completas.
    //  se completed for true: vai remove somente as tarefas feitas.
    // ou todas as tarefas  se completed for false: vai remover todas as tarefas com arraay vazio.
    tasks = completed ? tasks.filter((task) => !task.complete) : [];

    // Atualiza o localStorage com a nova lista
    storage.setLocalStorage("tasks", tasks);
  };
  btnRemoveCompleted.onclick = () => removeTask(true);
  removeAllTasks.onclick = () => removeTask(false);
};
