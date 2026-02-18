// Soal 1 — Total Nilai
// Diberikan:
// const nilai = [80, 90, 70, 100];
const nilai = [80, 90, 70, 100];

// const totalNilai = nilai.filter((nilai) => nilai + nilai);
const hasil = nilai.reduce((nilai, n) => nilai + n, 0);
console.log(hasil);

// Soal 2 — Nilai Tertinggi
// Dari array yang sama:
// const nilai = [80, 90, 70, 100];

const tertinggi = Math.max(...nilai);
console.log(tertinggi);

// LEVEL 2 — Gabungan map + filter
//  Soal 3 — Lulus Saja
// const nilai = [60, 75, 80, 50, 90];

// const lulusSaja = nilai.filter((nilai) => nilai >= 75);
// const hasilNilai = lulusSaja.map((nilai) => nilai + nilai);

// console.log(lulusSaja);
// console.log(hasilNilai);

// LEVEL 3 — Object Logic (React Style)
// Soal 4 — Cari User Dewasa
const users = [
  { nama: "Andi", umur: 17 },
  { nama: "Budi", umur: 21 },
  { nama: "Caca", umur: 19 },
];

// Ambil hanya user yang umur >= 18.
const umurDelapanBelas = users.filter((users) => users.umur >= 18);
const hanyaNama = umurDelapanBelas.map((users) => users.nama);
console.log(umurDelapanBelas);
console.log(hanyaNama);

// LEVEL 4 — Logic Lebih Tajam
// Soal 6 — Balik String
// Buat function:
// balikKata("salby")
function balikString(str) {
  return str.split("").reverse().join("");
}
console.log(balikString("Ramdani"));

// Soal 7 — Hitung Huruf
// Buat function yang menghitung jumlah huruf dalam string.
// hitungHuruf("react")
function jumlahHuruf(string) {
  return string.length;
}
console.log(jumlahHuruf("Ramdani"));

// LEVEL 5 — Mindset Developer
//  Soal 8 — Hapus Duplikat
const angka = [1, 2, 2, 3, 4, 4, 5];

// Buat supaya hasilnya:
const hasilAngka = [...new Set(angka)];
console.log(hasilAngka);

// [1,2,3,4,5]
