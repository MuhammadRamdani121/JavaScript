//1  function
// function nama() {}
// // function arrow
// const nama = () => {};

// function arrow
const tambah = (a, b) => a + b;

const array = [1, 2, 3, 4];
// 2 Array map()
// menampilkan data

const nampilin = array.map((array) => array);
console.log(nampilin);

// 3 Array filter()
// search , sorting data,tampilkan data tertentu
const pilihArray = array.filter((array) => array % 2 === 0);
console.log(pilihArray);

// 4 Array reduce()
// Total Nilai, Hitung Data,Grouping
const tambahinArray = array.reduce((array, n) => array + n, 0);
console.log(tambahinArray);

// 5 Object
// React hampir selalu pakai object

const user = {
  nama: "ramdani",
  umur: 20,
};
const { nama, umur } = user;
console.log(user.nama);
console.log(umur);
