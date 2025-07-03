let descriptionSelecionada = null;
let liSelecionada = null;

function completionTask(description, li) {
  descriptionSelecionada = description;
  liSelecionada = li;
  console.log("Tarefa completada:", descriptionSelecionada);
  console.log("Elemento LI selecionado:", liSelecionada);
}

document.addEventListener("completionFocos", () => {
  if (descriptionSelecionada && liSelecionada) {
    liSelecionada.classList.remove("app__section-task-list-item-active");
    liSelecionada.classList.add(
      "app__section-task-list-item-complete",
      "app__section-task-icon-status"
    );

    // Desativa o botão de editar
    const btn = liSelecionada.querySelector("button");
    if (btn) btn.setAttribute("disabled", true);
  }
});

export default completionTask;
