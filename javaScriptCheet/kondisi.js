let nilai = 89;
let mahasiswa = "ramdani";

// If, Else IF
if (nilai >= 80 && nilai <= 100) {
  console.log(nilai + " A");
  grade = "A";
} else if (nilai >= 70 && nilai <= 79) {
  console.log(nilai + " B");
} else if (nilai >= 59 && nilai <= 69) {
  console.log(nilai + " C");
} else {
  console.log(nilai + " Try Again");
}

if (grade === "A") {
  console.log("Selamat cuy");
}

const form = document.getElementById(`form`);
const nilai1 = document.getElementById(`nilai1`);
const enter = document.getElementById("enter");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nilaiInput = Number(nilai1.value);
  if (nilaiInput >= 80) {
    alert(`Selamat Anda Mendapatkan A`);
  } else {
    alert(`asd`);
  }
});
