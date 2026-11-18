// Data nilai mahasiswa
const nilai = [80, 75, 90, 65, 85, 95, 70];

console.log("Seluruh nilai:", nilai);

// Mencari nilai tertinggi dan terendah
let tertinggi = Math.max(...nilai);
let terendah = Math.min(...nilai);

// Menghitung total nilai
let total = 0;
let jumlahLulus = 0;

for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];

    if (nilai[i] >= 75) {
        jumlahLulus++;
    }
}

// Menghitung rata-rata
let rataRata = total / nilai.length;

// Menampilkan hasil
console.log("Nilai tertinggi:", tertinggi);
console.log("Nilai terendah:", terendah);
console.log("Rata-rata:", rataRata);
console.log("Jumlah mahasiswa lulus:", jumlahLulus);