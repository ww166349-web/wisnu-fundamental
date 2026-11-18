// Data belanja
let hargaBarang = 25000;
let jumlahBarang = 4;
let diskonPersen = 10;

// Menghitung total sebelum diskon
let totalHarga = hargaBarang * jumlahBarang;

// Menghitung diskon
let diskon = totalHarga * diskonPersen / 100;

// Menghitung total pembayaran
let totalBayar = totalHarga - diskon;

// Menampilkan hasil
console.log("=== TOTAL BELANJA ===");
console.log("Total Harga: Rp" + totalHarga);
console.log("Diskon: Rp" + diskon);
console.log("Total Bayar: Rp" + totalBayar);