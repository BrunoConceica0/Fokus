const btnShort = document.querySelector(".app__card-button--curto");
const btnLong = document.querySelector(".app__card-button--longo");
const btnStart = document.querySelector(".app__card-button--foco");
const banner = document.querySelector(".app__image");
const html = document.querySelector("html");

function changeBackground() {
  btnShort.addEventListener("click", (event) => {
    changeContex("descanso-curto");
    event.currentTarget.classList.add("active");
    if (event.currentTarget.classList.contains("active")) {
      btnLong.classList.remove("active");
      btnStart.classList.remove("active");
    }
  });
  btnLong.addEventListener("click", (event) => {
    changeContex("descanso-longo");
    event.currentTarget.classList.add("active");
    if (event.currentTarget.classList.contains("active")) {
      btnShort.classList.remove("active");
      btnStart.classList.remove("active");
    }
  });
  btnStart.addEventListener("click", (event) => {
    changeContex("foco");
    event.currentTarget.classList.add("active");
    if (event.currentTarget.classList.contains("active")) {
      btnShort.classList.remove("active");
      btnLong.classList.remove("active");
    }
  });
}

function changeContex(context) {
  html.setAttribute("data-contexto", context);
  banner.setAttribute("src", `./imagens/${context}.png`);
}

export default changeBackground;
