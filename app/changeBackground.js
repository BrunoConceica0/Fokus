// import changeTitle from "./changeTitle";
const btnShort = document.querySelector(".app__card-button--curto");
const btnLong = document.querySelector(".app__card-button--longo");
const btnStart = document.querySelector(".app__card-button--foco");
const banner = document.querySelector(".app__image");
const appTitle = document.querySelector(".app__title");
const html = document.querySelector("html");

function changeBackground() {
  btnShort.addEventListener("click", (event) => {
    changeContex("descanso-curto");
    event.currentTarget.classList.add("active");
    if (event.currentTarget.classList.contains("active")) {
      btnLong.classList.remove("active");
      btnStart.classList.remove("active");
    }
    appTitle.innerHTML = `
                Que tal dar uma respirada?,<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>`;
  });
  btnLong.addEventListener("click", (event) => {
    changeContex("descanso-longo");
    event.currentTarget.classList.add("active");
    if (event.currentTarget.classList.contains("active")) {
      btnShort.classList.remove("active");
      btnStart.classList.remove("active");
    }
    appTitle.innerHTML = `
               Hora de voltar a superfície,<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
    `;
  });
  btnStart.addEventListener("click", (event) => {
    changeContex("foco");
    event.currentTarget.classList.add("active");
    if (event.currentTarget.classList.contains("active")) {
      btnShort.classList.remove("active");
      btnLong.classList.remove("active");
    }
    appTitle.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
    `;
  });
}

function changeContex(context) {
  html.setAttribute("data-contexto", context);
  banner.setAttribute("src", `./imagens/${context}.png`);
  banner.classList.add("active");
  appTitle.classList.add("active");
  setTimeout(() => {
    banner.classList.remove("active");
    appTitle.classList.remove("active");
  }, 300);
}

export default changeBackground;
