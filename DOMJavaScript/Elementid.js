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
