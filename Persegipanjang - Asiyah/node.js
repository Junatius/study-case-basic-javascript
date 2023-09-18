class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }

    hitungLuas() {
        return this.panjang * this.lebar;git
    }
    hitungKeliling() {
        return 2 * (this.panjang + this.lebar);
    }
}

const persegiPanjang1 = new PersegiPanjang(5, 3);

console.log(`Luas Persegi Panjang: ${persegiPanjang1.hitungLuas()}`);
console.log(`Keliling Persegi Panjang: ${persegiPanjang1.hitungKeliling()}`);
