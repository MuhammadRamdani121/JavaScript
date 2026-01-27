let maximum = parseInt(prompt(`masukan nilai maksimal`));
while (!maximum) {
  maximum = parseInt(prompt(`masukan nilai maksimal`));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt(`Masukan Tebakan Pertama!`));

while (guess !== targetNum) {
  if (guess > targetNum) {
    guess = parseInt(
      prompt(`Tebakan terlalu tinggi! Masukan tebakan yang lebih rendah:`),
    );
  } else {
    guess = parseInt(
      prompt(`Tebakan terlalu rendah! Masukan tebakan yang lebih tinggi:`),
    );
  }
  alert(`Tebakan benar!`);
}
