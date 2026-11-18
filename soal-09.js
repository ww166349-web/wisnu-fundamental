// Data mahasiswa
const mahasiswa = [
    { nama: "Andi", nilai: 85 },
    { nama: "Budi", nilai: 60 },
    { nama: "Citra", nilai: 90 },
    { nama: "Doni", nilai: 70 },
    { nama: "Eka", nilai: 95 }
];

// Memisahkan mahasiswa yang lulus
const lulus = mahasiswa.filter(m => m.nilai >= 75);

// Memisahkan mahasiswa yang tidak lulus
const tidakLulus = mahasiswa.filter(m => m.nilai < 75);

// Menampilkan mahasiswa lulus
console.log("=== MAHASISWA LULUS ===");
console.log(lulus);

// Menampilkan mahasiswa tidak lulus
console.log("=== MAHASISWA TIDAK LULUS ===");
console.log(tidakLulus);

// Menghitung jumlah mahasiswa lulus
console.log("Jumlah mahasiswa lulus:", lulus.length);

// Mengurutkan nilai tertinggi
const urutanNilai = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);

console.log("=== URUTAN NILAI TERTINGGI ===");
console.log(urutanNilai);