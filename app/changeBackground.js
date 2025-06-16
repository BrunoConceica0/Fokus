const btnShort = document.querySelector(".app__card-button--curto");
const btnLong = document.querySelector(".app__card-button--longo");
const btnStart = document.querySelector(".app__card-button--foco");
const banner = document.querySelector(".app__image");
const html = document.querySelector("html");

function changeBackground() {
  btnShort.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-curto");
    banner.setAttribute("src", "./imagens/descanso-curto.png");
  });
  btnLong.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-longo");
    banner.setAttribute("src", "./imagens/descanso-longo.png");
  });
  btnStart.addEventListener("click", () => {
    html.setAttribute("data-contexto", "foco");
    banner.setAttribute("src", "./imagens/foco.png");
  });
}

export default changeBackground;
