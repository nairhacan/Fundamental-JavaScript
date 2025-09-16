// Study kasus

let SDA = 50000;
let SDT = 80000;
const hutang = 30000;
const SA = SDA - SDT - hutang;
alert('Saldo Akhir: ' + SA);





// operator aritmatika

let x = 50000;
let y = 75000;

let tambah = x + 25000; // penjumlahan
let kurang = y - 25000; // pengurangan
let kali = x * 2; // perkalian
let bagi = y / 2; // pembagian
let sisa = y % 3; // sisa bagi
let pangkat = x ** 2; // pangkat
console.log('x: ' + x);
console.log('y: ' + y);
console.log('tambah: ' + tambah);
console.log('kurang: ' + kurang);
console.log('kali: ' + kali);
console.log('bagi: ' + bagi);
console.log('sisa: ' + sisa);
console.log('pangkat: ' + pangkat);
// alert('x: ' + x);
// alert('y: ' + y);
// alert('tambah: ' + tambah);
// alert('kurang: ' + kurang);
// alert('kali: ' + kali);
// alert('bagi: ' + bagi);
// alert('sisa: ' + sisa);
// alert('pangkat: ' + pangkat);

// operator penugasan
let a = 10;
a += 5; // a = a + 5
a -= 3; // a = a - 3
a *= 2; // a = a * 2
a /= 4; // a = a / 4
a %= 3; // a = a % 3
a **= 2; // a = a ** 2
console.log('nilai a: ' + a);
// alert('nilai a: ' + a);

// operator perbandingan
console.log(x == 50000); // sama dengan
console.log(y != 75000); // tidak sama dengan
console.log(x > 40000); // lebih dari
console.log(y < 80000); // kurang dari
console.log(x >= 50000); // lebih dari atau sama dengan
console.log(y <= 75000); // kurang dari atau sama dengan
console.log(x === 50000); // identik (sama nilai dan tipe data)
console.log(y !== 75000); // tidak identik (tidak sama nilai atau tipe data)
console.log(x === '50000'); // false karena tipe data berbeda
console.log(y !== '75000'); // true karena tipe data berbeda
console.log(x == '50000'); // true karena tipe data di abaikan
console.log(y != '75000'); // false karena tipe data di abaikan
console.log(x === 50000 && y == 75000); // true karena kedua kondisi benar
console.log(x === 50000 || y == 70000); // true karena salah satu kondisi benar
console.log(!(x === 50000)); // false karena kondisi di negasi
console.log(!(x === 40000)); // true karena kondisi di negasi

// operator unary
let saldo = 100000;
console.log(++saldo); // menambah 1
console.log(--saldo); // mengurangi 1
console.log(typeof saldo); // mengetahui tipe data
console.log(-saldo); // mengubah nilai menjadi negatif
console.log(+saldo); // mengubah nilai menjadi positif
console.log(!true); // negasi
console.log(!false); // negasi
console.log(!!true); // negasi ganda
console.log(!!false); // negasi ganda
console.log(!!0); // false
console.log(!!1); // true
console.log(!!''); // false
console.log(!!'Kina'); // true
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!{}); // true


