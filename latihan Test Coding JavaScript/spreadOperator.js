// contoh 1
const angka = [1, 2, 3];
const baru = [...angka, 4, 5];

console.log(baru);

// // contoh 2
// const users = { nama: "budi" };
// const updateUsers = {
//   ...users,
//   umur: 20,
// };
// console.log(updateUsers);

// soal 1
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];

console.log(c);

const user = {
  nama: "andi",
};

const updateUser = {
  ...user,
  umur: 20,
};
console.log(updateUser);

// soal 1
// let produk = {
//   nama: "Laptop",
//   harga: 5000,
// };
// let updateProduk = {
//   ...produk,
//   harga: 7000,
// };
// console.log(updateProduk);

// soal 2
let angkaa = [1, 2, 3];

let tambahangka = [...angka, 4];
console.log(tambahangka);

// contoh soal 1
// data.map(item => tampilkanUI)
// const users = ["andi", "budi", "caca"];

// users.map((user) => {
//   console.log("Hallo " + user);
// });

// soal 1
const produk = ["Laptop", "Mouse", "keyboard"];

produk.map((produk) => {
  console.log("Produk: " + produk);
});

// soal 2
const users = [
  {
    nama: "Andi",
    umur: 20,
  },
  {
    nama: "Budi",
    umur: 22,
  },
];

users.map((users) => {
  console.log(users.nama + " berumur " + users.umur);
});
