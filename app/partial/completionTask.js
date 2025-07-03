import sotrage from "../partial/localStorage.js";

let tarefaSelecionada = null;
let liSelecionada = null;

function completionTask(description, li) {
  tarefaSelecionada = description;
  liSelecionada = li;
}

document.addEventListener("completionFocos", () => {
  if (tarefaSelecionada && liSelecionada) {
    liSelecionada.classList.remove("app__section-task-list-item-active");
    liSelecionada.classList.add(
      "app__section-task-list-item-complete",
      "app__section-task-icon-status"
    );

    const btn = liSelecionada.querySelector("button");
    if (btn) btn.setAttribute("disabled", true);

    const tasks = sotrage.getLocalStorage("tasks");
    const index = tasks.findIndex((t) => t.description === tarefaSelecionada);
    if (index !== -1) {
      tasks[index].complete = true;
      sotrage.setLocalStorage("tasks", tasks);
    }

    tarefaSelecionada = null;
    liSelecionada = null;
  }
});

export default completionTask;
