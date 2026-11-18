// Nilai mahasiswa
let nilai = 88;

// Menentukan predikat
if (nilai < 0 || nilai > 100) {
    console.log("Nilai tidak valid");
} else if (nilai >= 85) {
    console.log("Predikat: A");
} else if (nilai >= 75) {
    console.log("Predikat: B");
} else if (nilai >= 65) {
    console.log("Predikat: C");
} else if (nilai >= 50) {
    console.log("Predikat: D");
} else {
    console.log("Predikat: E");
}