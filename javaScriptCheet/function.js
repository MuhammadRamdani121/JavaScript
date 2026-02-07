// function deklarasi
function deklarasi(a, b) {
  return a + b;
}
deklarasi();
console.log(deklarasi(1, 2));

// function Expression
const expresion = function () {
  let a = 10;
  let b = 20;
  let hasil = a + b;
  console.log(hasil);
};
expresion();

// arrow function
const arrow = (a, b) => {
  //   let a = 2;
  //   let b = 4;
  return a * b;
};
console.log(arrow(2, 2));
arrow(2, 2);
