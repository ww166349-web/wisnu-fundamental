// Membuat object produk
const produk = {
    nama: "Laptop",
    harga: 7500000,
    stok: 10,
    kategori: "Elektronik"
};

// Menampilkan nama dan harga
console.log("Nama Produk:", produk.nama);
console.log("Harga Produk: Rp" + produk.harga);

// Mengubah stok menjadi 5
produk.stok = 5;

// Menambahkan merek
produk.merek = "Lenovo";

// Menampilkan seluruh object
console.log("=== DATA PRODUK ===");
console.log(produk);