import storage from "../partial/localStorage.js";
import createElements from "../partial/CreateELements.js";
import completionTask from "../partial/completionTask.js";
import removeTaksCompleted from "../components/form/removeTaks.js";

const taskList = document.querySelector(".app__section-task-list");
const paragraphDescription = document.querySelector(
  ".app__section-active-task-description"
);

function createElementsTask(description) {
  let descriptionSelecting = null;
  let liDescriptionSelecting = null;

  const li = new createElements("li", "", "app__section-task-list-item");

  const tasks = storage.getLocalStorage("tasks");
  const task = tasks.find((task) => task.description === description);

  // checando se a tarefa está completa para o localStorage salvar como true e aplicando a estilização de completo no li na linha 123
  const isCompleted = task && task.complete === true;

  li.on("click", () => {
    taskList.querySelectorAll("li").forEach((li) => {
      if (li.classList.contains("app__section-task-list-item-active")) {
        li.classList.remove("app__section-task-list-item-active");
      }
    });

    if (descriptionSelecting === description) {
      descriptionSelecting = null;
      paragraphDescription.textContent = "";
      liDescriptionSelecting = null;
      return;
    }

    descriptionSelecting = description;
    liDescriptionSelecting = li.el;

    // Notify the completion module which task is selected
    completionTask(description, li.el);

    paragraphDescription.textContent = description;
    li.el.classList.add("app__section-task-list-item-active");

    // (Optional) Save the task element state if needed
    storage.setLocalStorage(description, li.el);
  });

  const svg = new createElements("svg", "", "");
  const svgContainer = new createElements(
    "svg",
    "",
    "app__section-task-icon-status"
  );
  const circle = new createElements("circle", "", "");
  circle.setAttribute("cx", "12");
  circle.setAttribute("cy", "12");
  circle.setAttribute("r", "12");
  circle.setAttribute("fill", "#E2E8F0");

  const path = new createElements("path", "", "");
  path.setAttribute(
    "d",
    "M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
  );
  path.setAttribute("fill", "#01080E");

  const p = new createElements(
    "p",
    description,
    "app__section-task-list-item-description"
  );
  p.el.style = "cursor: pointer";

  const btn = new createElements("button", "", "app_button-edit");
  btn.setAttribute("type", "button");
  btn.setAttribute("title", "Edit task");

  btn.on("click", (event) => {
    event.preventDefault();

    // Ask the user to edit the current task
    const newDescription = prompt("Edit task");

    if (newDescription === null || newDescription.trim() === "") {
      alert("Invalid description. Task was not edited.");
      return;
    } else {
      p.el.textContent = newDescription;

      const tasks = storage.getLocalStorage("tasks");

      const taskIndex = tasks.findIndex(
        (task) => task.description === description
      );

      if (taskIndex !== -1) {
        tasks[taskIndex].description = newDescription;
        storage.setLocalStorage("tasks", tasks);
        alert("Task successfully edited!");
      }
    }

    description = newDescription;
  });

  const btnImg = new createElements("img", "", "");
  btnImg.setAttribute("src", "/imagens/edit.png");

  if (!description || typeof description !== "string") {
    p.textContent = "Descrição inválida";
  } else {
    taskList.appendChild(li.el);
    li.el.appendChild(svg.el);
    li.el.appendChild(p.el);
    li.el.appendChild(btn.el);
    svg.el.appendChild(svgContainer.el);
    svgContainer.el.appendChild(circle.el);
    svgContainer.el.appendChild(path.el);
    btn.el.appendChild(btnImg.el);

    //Na linha 20 apos checar se a tarefa está completa, adiciona a classe de estilização e desabilita o botão de editar
    if (isCompleted) {
      li.el.classList.add(
        "app__section-task-list-item-complete",
        "app__section-task-icon-status"
      );
      btn.el.setAttribute("disabled", true);
    }

    return li;
  }

  completionTask(description, li.el);
  removeTaksCompleted();
}

export default createElementsTask;
