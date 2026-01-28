// forEach = memanggil fungsi sebanyak element yang dimiliki array

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

angka.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

// memilih data tertentu didalam array dengan filter method
const angkaGanjil = angka.filter((n) => {
  return n % 2 === 1;
});

const animes = [
  {
    title: `Attack on Titan`,
    rating: 70,
  },
  {
    title: `bleach`,
    rating: 80,
  },
  {
    title: `naruto`,
    rating: 99,
  },
  {
    title: `demon slayer`,
    rating: 95,
  },
];

animes.forEach(function (anime) {
  console.log(`${anime.title} - Rating: ${anime.rating}/100`);
});

// map Method
const animeList = animes.map(function (anime) {
  return anime.title.toUpperCase();
});
