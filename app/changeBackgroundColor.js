const btnShort = document.querySelector(".app__card-button--curto");
const btnLong = document.querySelector(".app__card-button--longo");
const btnStart = document.querySelector(".app__card-button--foco");
const html = document.querySelector("html");

function changeBackgroundColor() {
  btnShort.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-curto");
  });
  btnLong.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-longo");
  });
  btnStart.addEventListener("click", () => {
    html.setAttribute("data-contexto", "foco");
  });
}

export default changeBackgroundColor;
