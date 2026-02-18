// // materi 1 function
// // contoh
// /*! function sapa(nama) {
//   return "Hallo " + nama;
// }

// sapa("ramdani");
// console.log(sapa("Ramdani"));
// */
// // 🔥 Soal 1
// // Buat function bernama tambah yang:
// // -menerima 2 angka
// // -mengembalikan hasil penjumlahan

// function tambah(a, b) {
//   return "Pertambahan " + a + b;
// }

// console.log(tambah(2, 1));

// function ganjilGenap(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const hasil = hasil[i];
//     if (hasil % 2 === 0) {
//       console.log(hasil);
//       return hasil;
//     } else {
//     }
//   }
// }
// console.log(ganjilGenap(1, 2, 3, 4, 5));

// function arrow
// soal 1
// function kurang(a, b) {
//   return a - b;
// }
// ubah jadi arrow function
// const kurang = (a, b) => a - b;

// // segitiga
// const luasSegitiga = (a, b) => (a * b) / 2;

// console.log(kurang(1, 3));
// console.log(luasSegitiga(4, 6));

// const angka = [1, 2, 3];
// const hasil = angka.map((n) => n * 2);

// console.log(hasil);

// // soal 1 map
// const angka = [2, 4, 6];
// const hasil = angka.map((n) => n * 2);

// console.log(hasil);

// // soal 2 map
// const nama = ["andi", "budi", "caca"];
// const upper = nama.map((n) => n.toUpperCase());

// console.log(upper);

// soal 3 filter
const angka = [1, 2, 3, 4, 5];
const genap = angka.filter((n) => n % 2 === 0);

console.log(genap);

const angkaa = [3, 6, 9, 12, 15];
const lebihDariDelapan = angkaa.filter((n) => n >= 8);

console.log(lebihDariDelapan);

const nilai = [60, 80, 90, 70, 50];

const nilaiLebih = nilai.filter((n) => n >= 75);
console.log(nilaiLebih);
