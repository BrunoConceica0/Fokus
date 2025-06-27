export default (texteraTask) => {
  const btnClean = document.querySelector(".app__form-footer__button--cancel");
  console.log(btnClean);
  btnClean.addEventListener("click", (event) => {
    event.preventDefault();
    !texteraTask ? alert("Nenhum campo para limpar") : (texteraTask.value = "");
  });
};
