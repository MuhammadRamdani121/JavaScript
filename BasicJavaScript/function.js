function jumlah(a, b) {
  const total = a + b;
  console.log(total);
}

jumlah(1, 4);

// menggunakan return
function kali(a, b) {
  if (typeof a !== `number` || typeof b !== `number`) {
    return false;
  }
  return a + b;
}

// menggunakan scope
let programming = `javascript`;

function typeSafe() {
  programming = `typescript`;
  console.log(programming);
}

typeSafe();

//lexial scope
function lamarKerja() {
  const jabatan = `programmer`;

  function lebihDalam() {
    function orangDalam() {
      let kenalan = `orang dalam bisa memasukan ${jabatan}`;
      console.log(kenalan);
    }
    orangDalam();
  }
  lebihDalam();
}

// function expression
const pangkat = function (nilai) {
  return nilai * nilai;
};
perpangkatan(5);

const pangkat1 = function (nilai, pembanding) {
  return nilai * pembanding;
};
perpangkatan(1, 2);

// keyword this
const saya = {
  nama: `ramdani`,
  hobi: `coding`,
  kenalan: function () {
    return `saya ${this.nama} hobi ${this.hobi}`;
  },
};

saya.kenalan();
saya.nama = `denden`;
saya.kenalan();

// try and catch

function teriak(msg) {
  try {
    console.log(msg.toUpperCase());
  } catch (error) {
    console.log(error);
    console.log(`silahkan masukan tipe data string argument teriak()`);
  }
}
