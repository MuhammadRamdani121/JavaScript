// Challenge 1 — Jumlah Angka Genap
// const angka = [1,2,3,4,5,6];

// Hitung total semua angka genap.
// const angka = [1, 2, 3, 4, 5, 6];

// const pilih = angka.filter((n) => n % 2 === 0);
// const genap = pilih.reduce((pilih, n) => pilih + n, 0);
// console.log(pilih);
// console.log(genap);

// Challenge 2 — Kata Terpanjang
// const kata = ["react", "javascript", "web", "developer"];
// Cari kata yang paling panjang.

// const kata = ["react", "javascript", "web", "developer"];

// const palingPanjang = String.length(...kata);

// console.log(palingPanjang);

// Challenge 3 — Hitung Kemunculan Angka
// const angka = [1,2,2,3,3,3,4];
// Buat hasil seperti ini:
// {
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 1
// }
// const angka = [1, 2, 2, 3, 3, 3, 4];

// // gatau tekniknya /rumus nya sama kek nomer 2
// const Kemunculan = angka.reduce();

// Challenge 4 — Balik Urutan Array
// const angka = [1,2,3,4,5];
// Hasil:

// [5,4,3,2,1]
// const angka = [1, 2, 3, 4, 5];

// const balikAngka = (angka) => angka + int.split().reverse().join();

// console.log(balikAngka);

// Challenge 5 — Cari User Tertua (Level React 😎)
// const users = [
//   { nama: "Andi", umur: 20 },
//   { nama: "Budi", umur: 30 },
//   { nama: "Caca", umur: 25 }
// ];

// Ambil user yang umur paling besar.

// Output:

// { nama: "Budi", umur: 30 }
// const users = [
//   { nama: "Andi", umur: 20 },
//   { nama: "Budi", umur: 30 },
//   { nama: "Caca", umur: 25 },
// ];

// const umurBesar = users.filter((users) => users.umur >= 30);

// console.log(umurBesar);

const sapa = (nama) => "Halo " + nama;

console.log(sapa("ramdani"));
