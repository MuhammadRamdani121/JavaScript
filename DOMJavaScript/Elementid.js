function changeColor(newColor) {
  const elem = document.getElementById("sekolah");
  elem.style.color = newColor;
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    changeColor(event.target.textContent.toLowerCase());
  });
});
// selection with DOM
// by Id
// const sekolah = document.getElementById("sekolah")
// by Tag Name
// const allButton = document.getElementsByTagName(`button`);
// by ClassName
// const allClass = document.hetElementsByClassName(``);
// QuerrySelector
// const Querry = document.querrySelector(`h1`) // element h1 pertama
// const Querry = document.querrySelector(`#red`) // element pertama dengan Id bernilai `red`
// const Querry = document.querrySelector(`.className`) // element pertama dengan className bernilai `className`
// const Querry = document.querrySelectorALL(`.className`) // element pertama dengan className bernilai `className`

const innerText = document.getElementById(`innerText`);
const textContent = document.getElementById(`textContent`);
const innerHtml = document.getElementById(`innerHtml`);
const gambarAttributes = document.querySelector(`#gambarAttributes`);

innerText.innerText = `Ini Contoh Inner Text <b>`;
textContent.textContent = `Ini Contoh Text Content <b>`;
innerHtml.innerHTML = `Ini Contoh Inner <b>HTML </b>`;

gambarAttributes.alt = "kiw";
gambarAttributes.setAttribute(`class`, `isian-class`);
