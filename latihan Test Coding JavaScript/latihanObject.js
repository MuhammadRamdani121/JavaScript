const siswa = {
  nama: "Budi",
  kelas: "XI",
  umur: 17,
};

console.log(siswa.nama, siswa.umur);

const users = [
  { nama: "andi", umur: 20 },
  { nama: "budi", umur: 22 },
];

const kiw = users.map((users) => {
  return users.nama;
});

const hanyaNama = users.map((n) => n.nama + " " + n.umur);

console.log(hanyaNama);
console.log(kiw);
