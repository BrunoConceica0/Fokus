import changeContext from "./changeContext.js";
import countdown from "../../view/countdown.js";
const buttons = document.querySelectorAll(".app__card-list button");

function changeBackground() {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const elementBtn = event.target;
      // pegando o elemento clicado
      const context = elementBtn.getAttribute("data-contexto");
      // pega o atributo data-contexto do botão clicado
      buttons.forEach((btn) => btn.classList.remove("active"));
      // remove a classe active de todos os botões
      elementBtn.classList.add("active");

      changeContext(context);
    });
  });
}

export default changeBackground;
