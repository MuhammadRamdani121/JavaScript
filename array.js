// const contohArray = [
//   {
//     id: 1,
//     nama: "ramdani",
//   },
//   {
//     id: 2,
//     nama: "Salby",
//   },
// ];

// contoh array dan perulangan
const angka = [-1, -2, -3, -4, -5, -6, -7, 1, 2, 3, 4, 5, 6, 8, 10];

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);
// contoh array dan method filter
const newAngka = angka.filter(function (a) {
  return a >= 3;
});
console.log(newAngka);
