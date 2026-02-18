// Soal 1 — Function
// Buat function bernama kaliTiga:
// menerima 1 angka
// mengembalikan angka × 3
// kaliTiga(4) → 12

function kaliTiga(n) {
  return n * 3;
}

console.log(kaliTiga(2));
// Soal 2 — Arrow Function
// Buat arrow function bernama bagiDua:
// menerima 1 angka
// mengembalikan hasil dibagi 2

const bagiDua = (n) => n / 2;
console.log(bagiDua(5));

// Soal 3 — Array map()
// const angka = [1, 2, 3, 4];
// [2, 4, 6, 8];

const angka = [1, 2, 3, 4];
const hasil = angka.map((n) => n * 2);

console.log(hasil);
// Soal 4 — Array filter()
// const nilai = [50, 70, 90, 30, 100];
// Ambil nilai yang lebih besar dari 60.

const nilai = [50, 70, 90, 30, 100];
const ambilNilai = nilai.filter((n) => n >= 60);

console.log(ambilNilai);

// Soal 5 — Object
// Buat object:
// const mobil
// yang punya:
// merk
// warna
// tahun
// Lalu tampilkan hanya merk dan warna.

const mobil = [
  { merek: "toyota", warna: "red", tahun: 2001 },
  { merek: "Avanza", warna: "Wite", tahun: 2002 },
];
// const tampilkan = mobil.map((mobil) => {
//   return mobil.merek + " " + mobil.warna + " ";
// });
const tampilkan = mobil.map((mobil) => mobil.merek + " " + mobil.warna);
console.log(tampilkan);

// Soal 6 — Destructuring
// Gunakan destructuring untuk mengambil:
// merk
// tahun
// dari object mobil.
// destructing itu yg mana ya

// Soal 7 — Spread Operator (Array)
// Gabungkan:
// const a = [1,2];
// const b = [3,4];
// Menjadi:
// [1,2,3,4]

const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];
console.log(c);
// Soal 8 — Spread Operator (Object)
// Diberikan:
// let user = {
//   nama: "Budi",
//   umur: 20
// };

const { merk, tahun } = mobil;
console.log(merk, tahun);

// Buat object baru dengan umur menjadi 25 menggunakan spread operator.
let user = {
  nama: "budi",
  umur: 20,
};
let updateUser = {
  ...user,
  umur: 25,
};
console.log(updateUser);

// Soal 9 — map() + Object (Level React 😎)
// const users = [
//   { nama: "Andi", umur: 20 },
//   { nama: "Budi", umur: 22 },
//   { nama: "Caca", umur: 19 }
// ];
// Gunakan map() untuk mengambil semua nama saja.

const users = [
  { nama: "Andi", umur: 20 },
  { nama: "Budi", umur: 22 },
  { nama: "Caca", umur: 19 },
];

const namaUsers = users.map((users) => users.nama);
// saya mau nanya ini kalo 2 itu jadi , atau gmna contoh users => users.nama , users.umur gni?
// users.map(user => ({
//   nama: user.nama,
//   umur: user.umur
// }));
console.log(namaUsers);

// Soal 10 — Logic (Level Up 🧠)
// Buat function ganjilGenap:
// menerima 1 angka
// return "Genap" jika genap
// return "Ganjil" jika ganjil

function ganjilGenap(n) {
  if (n % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}
console.log(ganjilGenap(21));
