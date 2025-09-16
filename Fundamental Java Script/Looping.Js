// Looping Di ini ada beberapa jenis di javascript
// Fungsi dari looping adalah untuk mengulang sebuah perintah atau kode program


// 1. For Loop

for (let i = 0; i <= 5; i++) {
    console.log('Perulangan ke ' + i);
}

// Looping di sini dia ada 3 stastment 
/* let i = 0
👉 inisiasi → variabel i itu bernilai 0.

i <= 5
👉 kondisi → sebelum setiap perulangan, JavaScript ngecek:“Apakah i lebih kecil atau sama dengan 5?”
Kalau true → jalankan isi loop Sampai Nilai nya Lebih Besar samadengan 5.
Kalau false → hentikan loop atau jangan jalankan looping.

i++
👉 increment → setelah 1 kali isi loop dijalankan, nilai i akan bertambah 1 setiap 
pengecekan pada kondisi di statment ke 2.*/



//2. Penggunaan For Loop pada Array dan teknik maping
const NamaSiswa = ['Kina', 'Nariha', 'Roga']; // array satu dimensi
console.log(NamaSiswa.length) // maka di consloge akan bertuliskan 3 karena jumlah data nya ada 3

for (let a = 0; a < NamaSiswa.length; a++) {
    console.log('Nama Siswa ke ' + a + ' adalah ' + NamaSiswa[a]);
}
// jika di analogikan apakah variabel a itu lebih kecil dari jumlah data pada array (NamaSiswa.length)
//Karena di ini kita memasukan metode length() maka pada Looping data nya akan berubah menjadi jumlah data pada array
//contoh pada penulisan secara Garis Mentah nya akan seperti ini
/*  

for (let a = 0; a < 3; a++) {
    console.log('Nama Siswa ke ' + a + ' adalah ' + NamaSiswa[a]);
}

loh kok 3?
karena pada array NamaSiswa ada 3 data yaitu 'Kina', 'Nariha', 'Roga'
*/
// jika iya maka jalankan perintah di dalam looping nya
// jika tidak maka hentikan looping nya


//3. Looping dengan Metode While
x = 0;
while(x < 5){
    x++;
    console.log('Kina SaQina');
}
//jika di baca cek apakah nilai x itu lebih kecil dari 5 ?
//jika iya maka lakukan penambahan nilai X dan tampilkan 'Kina SaQina' sampai nilai x itu lebih kecil dari 5 dari yang tadi nya 0


//4. Looping dengan Metode Do While
y = 0;
do{
    y++;
    console.log('Nariha SaQina');
}   while(y < 5);
//jika di baca lakukan penambahan nilai Y sampai nilai y itu lebih kecil dari 5 dari yang tadi nya 0

// Catatan
// Berda nya Looping For, While dan Do While itu tergantung kebutuhan nya
// Looping dengan Metode While dia akan melakuakn pengecekan kondisi terlebih dahulu baru menjalankan perintah di dalam nya
// Sedangkan Looping dengan Metode Do While dia akan menjalankan perintah di dalam nya terlebih dahulu baru melakukan pengecekan pada kondisi

//5. Looping dengan Metode For...of
let NamaBuah = ['Mangga', 'Apel', 'Jeruk'];
for(let buah of NamaBuah){
    console.log(buah);
}
//jika di baca untuk setiap buah pada array NamaBuah maka tampilkan isi dari array tersebut
// Catatan
// Looping dengan Metode For...of ini hanya bisa di gunakan pada Array dan String saja
// Jika di gunakan pada Object maka akan error