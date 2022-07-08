// // // // var a = 4
// // // // function checkData() {
// // // //     if (a == 3) {
// // // //         return true;
// // // //     } else {
// // // //         return false;
// // // //     }
// // // // }


// // // // console.log(checkData());


// // // var warna = "putih";
// // // var teks = "";
// // // switch (warna) {
// // //     case "hitam":
// // //         teks = "warna hitam";
// // //         break;
// // //     case "merah":
// // //         teks = "Warna merah";
// // //         break;
// // //     case "hijau":
// // //         teks = "Warna hijau";
// // //         break;
// // //     default:
// // //         teks = "Warna tidak terdeteksi";
// // // }
// // // console.log(teks);

// // function cokobeli() {
// //     let iceCream = 'chocolate';
// //     if (iceCream !== 'chocolate') {
// //         return "Yay"
// //     } else if (iceCream === 'chocolate') {
// //         return "wah"
// //     } else {
// //         return "oke"

// //     }
// // }


// // console.log(cokobeli());

// // const number = 10;
// // const variableOne = `${number} buah soklat`
// // console.log(variableOne);


// function isEvenOrOdd(num) {

//     if (num % 2 == 0) { return "Number is even" } else {
//         return "Number is odd"
//     }
// }
// console.log(isEvenOrOdd(8));

var num = 10
var teks = ""
switch (num % 2) {
    case 0:

        teks = "even";
        break;

    default:
        teks = "odd";
}
console.log(teks)