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

console.log(user.nama);

// 6.Destructring
const { nama, umur } = user;
console.log(umur);

// 7. Spread Operator ...
const update = {
  ...user,
  nama: "aliando",
};
console.log(update);

// 8. Kondisi (If / Ternary)
// kondisi ? hasiltrue : hasilfalse;

// umur >= 18 ? "dewasa" : "Anak";

// 9.Template String
console.log(`${user.nama} Berumur ${user.umur}`);

// 10.Method String & Array
// .lenght
user.nama.toUpperCase();
user.nama.toLowerCase();
nama.split();
// nama.join();
// nama.reverse();
console.log(user.nama.length);
console.log(user.nama.toUpperCase());
console.log(user.nama.toLowerCase());
console.log(user.nama.split());
// console.log(user.nama.join());
// console.log(user.nama.reverse());

// Rumus Paling Sering di react
// Render Data
// user.map (item = > item.nama)

//Filter Data
// data.filter((item) => item.active);

// Update Object
// setUser({
//   ...user,
//   umur: 21
// });

// Tambah Data Ke Array
// setData([...data, newItem]);

// Update Data Berdasarkan ID (SUPER SERING)
// data.map(item =>
//   item.id === id ? {...item, nama: "baru"} : item
// );

// Ambil Data Object
// const { nama } = user;
