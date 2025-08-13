let Headset = 225000
let Mouse = 150000
let Keyboard = 350000
let pembayaran = 800000
let total = Headset+Mouse+Keyboard
let diskon = total*0.9
let potonganDiskon = total - diskon
let kembalian = 800000 - diskon

console.log("total belanja :" +total)
console.log( "Total setelah diskon :" +diskon)
console.log("Pembayaran :" +pembayaran)
console.log("Kembalian :" +kembalian)
