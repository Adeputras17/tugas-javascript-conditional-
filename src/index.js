// conditional var
const kelahiran = 1996;
const keterangan = kelahiran >= 1996 ? "Milenial" : "Gen Z";
console.log(keterangan);

// conditional map
const ListProduk = [
  {
    kaos: "erigo",
    harga: 150000
  },
  {
    kaos: "zara",
    harga: 100000
  },
  {
    kaos: "H & M",
    harga: 200000
  }
];

const Listkaos = ListProduk.map((value) => value.kaos);
console.log(Listkaos);

// conditional filter
const ListMahal = ListProduk.filter((value) => value.harga > 100000);
console.log(ListMahal);
