let NamaSiswa = ['Kina', 'Nariha', 'Roga']; // array satu dimensi
console.log(NamaSiswa);// menampilkan semua isi array
console.log(NamaSiswa[0]);   // menampilkan isi array index ke 0 taituu 'Kina'
// alert(NamaSiswa[1]);

//catatan 
// index array dimulai dari 0
// Index pada Array adalah urutan dari elemen-elemen dalam array yang dimulai dari angka 0.
// Jadi, elemen pertama dalam array memiliki index 0, elemen kedua memiliki index 1, dan seterusnya.



//Beberapa metode yang sering digunakan pada Array di JavaScript

// Menambahkan isi array Array Baru menggunakan push() dengan Rumus
// NamaVariabel.push('Isi Array Baru')
NamaSiswa.push('Davin'); 
console.log(NamaSiswa);
// alert(NamaSiswa);
//maka di sini yang akan tampil adalah ['Kina', 'Nariha', 'Roga', 'Davin']



// Menghapus isi array Pertama menggunakan shift() dengan Rumus
// NamaVariabel.shift()
NamaSiswa.shift(); 
console.log(NamaSiswa);
// alert(NamaSiswa);
//maka di sini yang akan tampil adalah ['Nariha', 'Roga', 'Davin']
//karena yang di hapus adalah index ke 0 yaitu 'Kina'



// Menghapus isi array Terakhir menggunakan pop() dengan Rumus
// NamaVariabel.pop()
NamaSiswa.pop();
console.log(NamaSiswa);
// alert(NamaSiswa);
//maka di sini yang akan tampil adalah ['Nariha', 'Roga']
//karena yang di hapus adalah index terakhir yaitu 'Davin'
// Menghitung jumlah isi array menggunakan length() dengan Rumus


// Definisikan Array Saat nilai nya Kosong 
let NamaBuah = []; // array satu dimensi
NamaBuah[0] = 'Mangga'; // menambahkan isi array index ke 0
NamaBuah[1] = 'Apel'; // menambahkan isi array index ke 1
console.log(NamaBuah);
// alert(NamaBuah);
//maka di sini yang akan tampil adalah ['Mangga', 'Apel']
//karena kita menambahkan isi array secara manual pada index ke 0 dan 1

// Menghitung jumlah isi pada  array menggunakan length() dengan Rumus
// console.log(NamaSiswa.length); 
let NamaPeserta = ['Kina', 'Nariha', 'Roga', 'Davin'];
console.log(NamaPeserta.length); // menampilkan semua isi array
console.log(NamaPeserta[0]);   // menampilkan isi array index ke 0 taituu 'Kina'
// alert(NamaSiswa[1]);