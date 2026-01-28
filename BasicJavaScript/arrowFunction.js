// function declaration
function perpangkatan(x) {
  return x * x;
}
// function call
// const hasil = perpangkatan(5);

// function Expression
// const hasil = function (x) {
//   return x * x;
// };

// arrow function
const perpangkatan = (x) => {
  return x * x;
};

const random = () => Math.floor(Math.random() * 10);

const pertambahan = (a, b) => a + b;

console.log(add(1, 3));
// akan melakukan proses secara berulang
const interval = setInterval(() => {
  console.log(random());
}, 1000);

console.log(`hallo....`);
// proses dieksekusi setelah
setTimeout(() => {
  console.log(`masih disana gak?`);
}, 5000);
console.log(`saya pergi ya`);
