//Luas Persegi
function hitungLuasPersegi(sisi) {
    return (sisi * sisi)
}
let sisiPersegi = 8;
let sisi1 = 8;
let sisi2 = 8;
let total = sisi1*sisi2
console.log(">> Luas Bangun Datar <<");
console.log("Luas Persegi dengan Sisi " + sisiPersegi + " adalah " + total )

//Luas Persegi Panjang
function hitungLuasPersegiPanjang(Luas){
    return (panjang * lebar)
}
let panjang = 9;
let lebar = 3;
let jumlah = panjang*lebar
console.log("Luas Persegi Panjang dengan Panjang 9 dan Lebar 3" + " adalah " + jumlah)

//Luas Lingkaran
function hitungLuasLingkaran(luas){
    return (p*r*r)
}
let jarijari1 = 6;
let jarijari2 = 6;
let p = 3.14;
total = p*jarijari1*jarijari2
console.log("Luas lingkaran dengan jari - jari 6" + " adalah " + total)

//Luas Segitiga
function hitungLuasSegitiga(luas){
    return (0.5*alas*tinggi)
}
let alas = 6;
let tinggi = 4;
let rumus = 0.5;
let hasil = rumus*alas*tinggi
console.log("Luas Segitiga dengan Alas 6 dan Tinggi 4" + " adalah " +hasil)

//Keliling Bangun Datar
function hitungKelilingPersegi(sisi){
    return (4*sisi)
}
let sisi = 8;
let keliling = 4;
let hasilKeliling = keliling*sisi
console.log(">> Keliling Bangun Datar <<")
console.log("Keliling persegi dengan sisi 8" + " adalah "+hasilKeliling)

//Keliling Persegi Panjang
function hitungKelilingPersegiPanjang(panjang, lebar){
    return 2*(panjang+lebar)
}
let panjangPersegiPanjang = 9;
let lebarPersegiPanjang = 3;
let total1= panjangPersegiPanjang+lebarPersegiPanjang
let totalKeliling = 2*total1
console.log("Keliling Persegi panjang dengan panjang 9 dan lebar 3 " + " adalah " +totalKeliling)

//Keliling Lingkaran 
function hitungKelilingLingkaran(jari){
    return 2*(p*r)
}
let jarijariLingkaran1 = 6;
let phi = 3.14;
let totalKelilingLingkaran = phi*jarijariLingkaran1
let totall= 2*totalKelilingLingkaran
console.log("Keliling Lingkaran dengan jari jari 6" + " adalah "+totall) 

//Keliling segitiga
function hitungKelilingSegitiga(sisi){
    return(sisi+sisi+sisi)
}
let sisiSegitiga1 = 6;
let sisiSegitiga2 = 6;
let sisiSegitiga3 = 6;
let totalKelilingSegitiga = sisiSegitiga1+sisiSegitiga2+sisiSegitiga3
console.log("Keliling Segitiga dengan sisi 6" + " adalah "+totalKelilingSegitiga)
