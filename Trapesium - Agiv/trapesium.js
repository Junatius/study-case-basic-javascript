class Trapesium {
  constructor(sisi1, sisi2, sisi3, sisi4, tinggi) {
    this.sisi1 = sisi1;
    this.sisi2 = sisi2;
    this.sisi3 = sisi3;
    this.sisi4 = sisi4;
    this.tinggi = tinggi;
  }

  hitungKeliling() {
    return this.sisi1 + this.sisi2 + this.sisi3 + this.sisi4;
  }

  hitungLuas() {
    return ((this.sisi1 + this.sisi2) / 2) * this.tinggi;
  }
}

const trapesiumKu = new Trapesium(2, 2, 2, 2, 5);
console.log("Keliling Trapesium:", trapesiumKu.hitungKeliling());
console.log("Luas Trapesium:", trapesiumKu.hitungLuas());
