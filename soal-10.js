// Data produk
const produk = [
    { nama: "Mouse", harga: 50000 },
    { nama: "Keyboard", harga: 100000 },
    { nama: "Monitor", harga: 1500000 },
    { nama: "Headset", harga: 200000 }
];

// Simulasi pembelian
const keranjang = [
    { nama: "Mouse", jumlah: 2 },
    { nama: "Keyboard", jumlah: 1 },
    { nama: "Headset", jumlah: 1 }
];

let subtotal = 0;

console.log("========= STRUK PEMBELIAN =========");

// Menghitung setiap produk
for (const item of keranjang) {

    const dataProduk = produk.find(p =>
        p.nama.toLowerCase() === item.nama.toLowerCase()
    );

    if (dataProduk && item.jumlah > 0) {

        let totalItem = dataProduk.harga * item.jumlah;

        subtotal += totalItem;

        console.log(
            dataProduk.nama + " x" + item.jumlah +
            " = Rp" + totalItem.toLocaleString("id-ID")
        );

    } else {
        console.log("Produk tidak ditemukan:", item.nama);
    }
}

// Menghitung diskon
let diskon = 0;

if (subtotal > 500000) {
    diskon = subtotal * 10 / 100;
}

// Menghitung total pembayaran
let totalBayar = subtotal - diskon;

// Menampilkan struk
console.log("-----------------------------------");
console.log("Subtotal: Rp" + subtotal.toLocaleString("id-ID"));
console.log("Diskon: Rp" + diskon.toLocaleString("id-ID"));
console.log("Total: Rp" + totalBayar.toLocaleString("id-ID"));
console.log("===================================");
console.log("Terima kasih!");