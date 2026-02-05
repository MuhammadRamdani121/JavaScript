1; // menggunakan operator `==` nilai a dan b sama (tanpa tipe data)
// function Expression
const operatorSamaDengan = function () {
  let a = 10;
  let b = "10";
  let hasil = a == b;
  console.log(hasil, hasil ? "Benar" : "Salah");
};
operatorSamaDengan();
2; // menggunakan operator `===` nilai a dan sama (tipe data)
//funvtion declaration
function operatorSamaDenganPersis(a, b) {
  let hasil = a === b;
  console.log(hasil, hasil ? "benar" : "Salah");
  return hasil;
}

console.log(operatorSamaDenganPersis("22", 22));

3; // operator `!=` nilai a dan b tidak sama
// function expression
const tidakSamaDengan = () => {
  let a = 10;
  let b = "10";
  let hasil = a != b;
  console.log(hasil, hasil ? "benar" : "Salah");
};
tidakSamaDengan();

4; // operator `!==` nilai a dan b tidak sama (tipedata)
//function expresion
const tidakSamaPersis = () => {
  let a = 10;
  let b = "10";
  let hasil = a !== b;
  console.log(hasil, hasil ? "Benar" : "Salah");
};
tidakSamaPersis();
