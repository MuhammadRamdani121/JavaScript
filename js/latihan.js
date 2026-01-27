// // 🔹 A. Dasar Variabel & Tipe Data

// // Buat variabel nama, umur, dan isStudent. Tampilkan ke console dalam 1 kalimat.

// // Apa bedanya let, const, dan var? Jelaskan dengan contoh.

// // Ubah string "100" menjadi number, lalu tambahkan dengan angka 50.

// let nama = "ramdani";
// let umur = 20;
// let isStudent = true;
// console.log(
//   `nama saya ${nama},umur saya ${umur},saya adalah seorang ${isStudent ? "siswa " : "bukan siswa"}`,
// );

// //bisa diubah isinya / manupulasi
// let nama = "ramdani";
// nama = "budi";
// // tidak bisa diubah isinya / tidak bisa di manupulasi
// const umur = 12;
// // umur = 13;bukan error tapi emng gak bisa diubah

// // bisa diubah isinya / manupulasi
// var kota = "bandung";
// kota = "semarang";

// console.log(nama);
// console.log(umur);
// console.log(kota);

// // mengubah string "100" menjadi integer/ Number dan ditambah 50
// let ubah = "100";
// // let angka = Number(ubah);
// // let hasil = angka + 50;
// // console.log(hasil);
// // cara 2
// let hasil = parseInt("100") + 50;
// console.log(hasil); // 150

// B. Operator & Kondisi
// 4.	Buat program yang mengecek:
//      Jika nilai ≥ 80 → "A"
//      70–79 → "B"
//      < 70 → "C"
// 5.	Apa hasil dari kode ini?
// console.log(5 == "5");
// console.log(5 === "5");

// let nilai = 90;
// if (nilai >= 80) {
//   console.log(`A`);
// } else if (nilai >= 70 && nilai < 80) {
//   console.log(`B`);
// } else {
//   console.log(`C`);
// }
// //kalau =nya 2 cmn ngecek nilainya bukan varibelnya
// console.log(5 == "5");
// // kalo 3 dicek dua duanya
// console.log(5 === "5");

// C. Looping

// Cetak angka 1 sampai 20 dengan:

// for

// while

// Cetak semua bilangan genap dari 1–50.
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//   }

//   console.log(i);
// }
// let number = 1;
// while (number <= 20) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }

//   number++;
// }
// D. Function

// Buat function luasPersegi(sisi) yang mengembalikan luas.

// Ubah function ini ke versi arrow function:
// function sapa(nama) {
//   return `Halo ${nama}`;
// }

// function luasPersegi(sisi) {
//   return sisi * sisi;
// }
// luasPersegi(4);
// // versi function
// function sapa(nama) {
//   return `Halo ${nama}`;
// }
// // versi arrow function
// const sapa = (nama) => {
//   return `Halo ${nama}`;
// };
// const sapa = (nama) => `Halo ${nama}`;

// E. Array

// Buat array buah = ["apel", "mangga", "jeruk"]

// Tambah "pisang" di akhir

// Hapus "mangga"

// Tampilkan hasil akhirnya

// Gunakan .map() untuk mengubah:

// [1,2,3,4] → [2,4,6,8]

// let buah = ["apel", "Mangga", "Jeruk"];
// buah.push("kiwi");
// buah.splice(1, 1);

// console.log(buah);

// let angka = [1, 2, 3, 4];
// let hasil = angka.map((n) => {
//   return n * 2;
// });
// // versi arrow function singkat
// // let hasil = angka.map((n) => n * 2);
// console.log(hasil);

// F. Object

// Buat object siswa berisi:

// nama

// kelas

// nilai

// Lalu tampilkan:
// 👉 Nama: ..., Kelas: ..., Nilai: ...

// const siswa = {
//   nama: "Ramdani",
//   kelas: 12,
//   nilai: 80,
// };

// console.log(
//   `Nama: ${siswa.nama}, Kelas: ${siswa.kelas}, Nilai: ${siswa.nilai}`,
// );

// G. Scope & Hoisting

// Apa output kode ini?

// console.log(x);
// var x = 10;

// Kenapa let lebih aman daripada var?
// karena meminta log dluan ga sih?harusnya setelah diberi variabel?hoisting
console.log(x);
var x = 10;

// kalau let itu dia gak bisa 2 nama variabelnya jadi lebih aman kalau var bisa saama nama variabelnya
