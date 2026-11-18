// Menampilkan angka genap
console.log("=== ANGKA GENAP ===");

let jumlahGenap = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        jumlahGenap += i;
    }
}

// Menampilkan angka ganjil
console.log("=== ANGKA GANJIL ===");

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Menampilkan jumlah angka genap
console.log("Jumlah seluruh angka genap:", jumlahGenap);