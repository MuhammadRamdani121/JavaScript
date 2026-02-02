const elem = document.getElementById("sekolah");

const buttonRed = document.getElementById(`red`);
const buttonBlue = document.getElementById(`blue`);
buttonRed.onclick = function () {
  elem.style.color = "red";
};
buttonBlue.onclick = function () {
  elem.style.color = "blue";
};

buttonBlue.onmouseover = () => {
  elem.style.color = "blue";
};
buttonRed.onmouseover = () => {
  elem.style.color = "red";
};
buttonBlue.onmouseout = () => {
  elem.style.color = "black";
};
buttonRed.onmouseout = () => {
  elem.style.color = "black";
};

buttonBlue.addEventListener(`click`, function () {
  elem.style.color = "blue";
});
buttonRed.addEventListener(`click`, function () {
  elem.style.color = "red";
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
// const secondSpan = spans[1];
// const Querry = document.querrySelector(`#red`) // element pertama dengan Id bernilai `red`
// const Querry = document.querrySelector(`.className`) // element pertama dengan className bernilai `className`
// const Querry = document.querrySelectorALL(`.className`) // element pertama dengan className bernilai `className`

// Merubah Isi Html
const innerText = document.getElementById(`innerText`);
const textContent = document.getElementById(`textContent`);
const innerHtml = document.getElementById(`innerHtml`);

innerText.innerText = `Ini Contoh Inner Text <b>`;
textContent.textContent = `Ini Contoh Text Content <b>`;
innerHtml.innerHTML = `Ini Contoh Inner <b>HTML </b>`;

const gambarAttributes = document.querySelector(`#gambarAttributes`);
gambarAttributes.alt = "kiw";
gambarAttributes.setAttribute(`class`, `isian-class`);

// style javaScript
const style = document.getElementById(`style`);
style.style.color = "red";
style.style.textAlign = "end";
// cara ke 2 classlist
style.setAttribute(`class`, `underline`);

//element parent,child dan sibling
const textBold = document.querySelector(`b`);
const beforeChild = textBold.parentElement;
// textBold.previousElementSibling
// textBold.nextElementSibling
document.createElement(`img`);
// Append
const newImage = document.createElement(`img`);
newImage.src =
  "https://i.pinimg.com/originals/47/af/05/47af05dc6b91f0b38a91d71af25471ee.jpg";
newImage.append(`a`);

// APpend Child
document.body.appendChild(newImage);
// Membuat class pada newImage
newImage.classList.add(`square`);

// remove child
// mengambil dengan by id
const firstLi = document.getElementById(`firstLi`);
// firstLi.parentElement.removeChild(firstLi);
// cara kedua tanpa memanggil parent element
// firstLi.remove();
