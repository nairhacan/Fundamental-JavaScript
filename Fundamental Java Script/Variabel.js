// variabel
// setiap variabel harus diawali dengan kata var, let, atau const
// diikuti dengan nama variabel
// pendefisian ini hanya di lakukan spertama kali saja dan tidak boleh di ulangi
//jika sudah var Usia = 20; maka tidak boleh di ulangi lagi var Usia = 30;
// tinggal tulis kan saja Usia = 30; untuk mengubah nilainya

var Usia = 20;
console.log('usia kamu adalah ' + Usia);

//Larangan dalam penamaan variabel

// variabel tidak boleh diawali dengan angka
// var 1nama = 'Kina'; // ini salah
var nama1 = 'Kina'; // ini benar
console.log('nama kamu adalah ' + nama1);

// variabel tidak boleh mengandung spasi
// var nama depan = 'Kina'; // ini salah
var nama_depan = 'Kina'; // ini benar
console.log('nama depan kamu adalah ' + nama_depan);

// variabel tidak boleh menggunakan karakter khusus
// var nama@depan = 'Kina'; // ini salah
var namaDepan = 'Kina'; // ini benar
console.log('nama depan kamu adalah ' + namaDepan);

// variabel tidak boleh menggunakan kata kunci yang sudah ada di JavaScript
// var var = 'Kina'; // ini salah
var nama = 'Kina'; // ini benar
console.log('nama kamu adalah ' + nama);

// variabel bersifat case sensitive
var Nama = 'Kina'; // ini benar
console.log('nama kamu adalah ' + Nama); // ini benar
console.log('nama kamu adalah ' + nama); // ini benar
// Nama dan nama adalah variabel yang berbeda
// console.log('nama kamu adalah ' + NAMA); // ini salah, karena NAMA tidak didefinisikan







// Macam Macam Variabel

var namaVar = 'Kina'; // variabel yang dideklarasikan dengan var
const x = 10; // variabel yang nilainya tidak bisa diubah
let y = 20; // variabel yang nilainya bisa diubah
y = 30; // mengubah nilai variabel y


// contoh penggunaan const yang di rubah nilai nya 
let usia = 20;
usia = 30; // ini akan error karena usia adalah constant
console.log('usia kamu adalah ' + usia);
// alert('usia kamu adalah ' + usia);


// eror nya akan seperti ini
// Variabel.js:51 Uncaught TypeError: Assignment to constant variable.
    // at Variabel.js:51:6
﻿


// penggunaan prompt untuk mengambil input dari user
let namaUser = prompt('masukkan nama anda: ');
//definiskan Variable namaUser adalah Propmt yang berisi input dari user
// lalu tampilkan namaUser di alert dan simpan di console
alert('nama anda adalah ' + namaUser);
console.log('nama anda adalah ' + namaUser);