let angkot = "angkot";

// perulangan for
for (let i = 0; i < 4; i++) {
  console.log(`Angkot Nomor .${i}`);

  for (let j = 0; j <= i; j += 2) {
    console.log(`angkot sudah jalan .${i}`);
    break;
  }
}
console.log(`<br>`);

// genap;
console.log(`Genap`);
for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(`Angkot Nomor. ${i} Sudah Jalan `);
  } else {
    console.log(`Angkot nomer. ${i}`);
  }
}
// ganjil
console.log(`Ganjil`);
for (let i = 1; i < 10; i++) {
  if (i % 2 === 1) {
    console.log(`Angkot Nomor. ${i} Sudah Jalan `);
  } else {
    console.log(`Angkot nomer. ${i}`);
  }
}
