const taskList = document.querySelector(".app__section-task-list");
import creadeElements from "../partial/CreateELements.js";
function creadeElementsTask() {
  const li = new creadeElements("li", "", "app__section-task-list-item");
  const svg = new creadeElements("svg", "", "");
  const svgContainer = new creadeElements(
    "svg",
    "",
    "app__section-task-icon-status"
  );
  const circle = new creadeElements("circle", "", "");
  circle.setAttribute("cx", "12");
  circle.setAttribute("cy", "12");
  circle.setAttribute("r", "12");
  circle.setAttribute("fill", "#E2E8F0");

  const path = new creadeElements("path", "", "");
  path.setAttribute(
    "d",
    "M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
  );
  path.setAttribute("fill", "#01080E");

  const p = new creadeElements(
    "p",
    "Estudando localStorage",
    "app__section-task-list-item-description"
  );
  const btn = new creadeElements("button", "", "app_button-edit");
  const btnImg = new creadeElements("img", "", "");
  btnImg.setAttribute("src", "/imagens/edit.png");

  taskList.appendChild(li.el);
  li.el.appendChild(svg.el);
  li.el.appendChild(p.el);
  li.el.appendChild(btn.el);
  svg.el.appendChild(svgContainer.el);
  svgContainer.el.appendChild(circle.el);
  svgContainer.el.appendChild(path.el);
  btn.el.appendChild(btnImg.el);
}
export default creadeElementsTask;
