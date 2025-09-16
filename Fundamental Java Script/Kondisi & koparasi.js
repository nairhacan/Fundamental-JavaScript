let Nama = 'Kina';
let umur = 3;


// jenis - Jenis komparasi atau perbandingan 
console.log(Nama == 'Kina'); // sama dengan
console.log(Nama != 'Kina'); // tidak sama dengan
console.log(umur > 2); // lebih dari
console.log(umur < 2); // kurang dari
console.log(umur >= 3); // lebih dari atau sama dengan
console.log(umur <= 3); // kurang dari atau sama dengan
console.log(umur === 3); // identik (sama nilai dan tipe data)
console.log(umur !== 3); // tidak identik (tidak sama nilai atau tipe data)
console.log(umur === '3'); // false karena tipe data berbeda
console.log(umur !== '3'); // true karena tipe data berbeda
console.log(umur == '3'); // true karena tipe data di abaikan
console.log(umur != '3'); // false karena tipe data di abaikan
console.log(umur === 3 && Nama == 'Kina'); // true karena kedua kondisi benar
console.log(umur === 3 || Nama == 'Nariha'); // true karena salah satu kondisi benar
console.log(!(umur === 3)); // false karena kondisi di negasi
console.log(!(umur === 4)); // true karena kondisi di negasi



// pengondisian menggunakan if else
if(Nama == null){
    Nama = 'Belum di isi '
}else{
    Nama = 'Sudah di isi '
}
console.log('Nama : ' + Nama);




// pengondisian menggunakan switch case
switch(umur){
    case 1:
        umur = 'umur kamu 1 tahun';
        break;
    case 2:
        umur = 'umur kamu 2 tahun';
        break;
    case 3:
        umur = 'umur kamu 3 tahun';
        break;
    default:
        umur = 'umur kamu lebih dari 3 tahun';
        break;
}
console.log(umur);

