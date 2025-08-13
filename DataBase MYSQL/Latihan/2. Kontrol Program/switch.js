let tanggal = 4
let bulan = 11
let tahun = 2002

switch (bulan) {
    case 1:
        bulan = "January";
        break;
    case 2:
        bulan = "February";
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        break;
    case 5:
        bulan = "Mei";
        break;
    case 6:
        bulan = "Juni";
        break;
    case 7:
        bulan = "Juli";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case 9:
        bulan = "September";
        break;
    case 10:
        bulan = "Oktober";
        break;
    case 11:
        bulan = "November";
        break;
    case 12:
        bulan = "Desember";
        break; 
        default:
            bulan = "Nomor bulan tidak diketahui"               
}
console.log(tanggal+ " " +bulan+ " " +tahun )