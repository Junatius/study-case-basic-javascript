class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  getLuas() {
    return this.sisi * this.sisi;
  }

  getKeliling() {
    return 4 * this.sisi;
  }
}

function hitungPersegi(sisi) {
  const persegi = new Persegi(sisi);

  console.log("Luas persegi:", persegi.getLuas());
  console.log("Keliling persegi:", persegi.getKeliling());
}

hitungPersegi(5);
hitungPersegi(20);
