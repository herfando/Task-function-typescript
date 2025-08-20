// 1. Fungsi tambah → menerima dua angka dan mengembalikan hasil penjumlahan
function tambah(a: number, b: number): number {
  return a + b;
}

// 2. Fungsi sapa → menerima nama (string) dan mengembalikan string sapaan
function sapa(nama: string): string {
  return `Halo ${nama}, selamat datang!`;
}

// 3. Fungsi info → menerima nama (string) dan umur (opsional), lalu mengembalikan string
function info(nama: string, umur?: number): string {
  if (umur !== undefined) {
    return `Halo ${nama}, umur kamu ${umur}`;
  } else {
    return `Halo ${nama}`;
  }
}

// 4. Panggil ketiga fungsi dengan contoh data
const hasilTambah = tambah(5, 7);
const hasilSapa = sapa("Andi");
const hasilInfo1 = info("Budi", 25);
const hasilInfo2 = info("Ani");
const hasilInfo3 = info("Citra", 30);

// Tampilkan hasil
console.log("Hasil tambah:", hasilTambah);
console.log(hasilSapa);
console.log(hasilInfo1);
console.log(hasilInfo2);
console.log(hasilInfo3);
