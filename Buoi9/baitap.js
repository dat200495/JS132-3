let result="";

// ---------------------------------------------------bai tap 1-------------------------------------------------------


// for (let i = 1; i <= 5; i++) {
//     for ( let j = 1; j <=5 ; j++){
//         if (j <= i) {
//             result += ("*");
//         }
//     }
//     result += "\n";
// }
// console.log(result);


// ----------------------------------------------------bai tap 2------------------------------------------------------


// let k = 5;
// for (let i = 1; i<= k; i++) {
//     for ( let j= 1; j<=2*k-1; j++) {
//         if (j<=k){
//             if (i<=j){
//                 result +="*";
//             }else {
//                 result+=" ";
//             }
//         } else {
//             if (j>=k+1) {
//                 if (i<= 2*k-j) {
//                     result+= "*";
//                 }else {
//                     result+= " ";
//                 }
//             }
//         }    
//     } 
//     result +="\n";
// }
// console.log(result);




//                                                    HOAC-baitap2   


// let k = 5;
// for (let i = 1; i<= 5; i++) {
//     for ( let j= 1; j<=9; j++) {
//         if ((j<=k && i<=j)||(j>=k+1 && i<=2*k -j)) {
//             result +="*";
//         }else {
//             result += " ";
//         }
//     }
//     result += "\n";
// }
// console.log (result);

//-----------------------------------------------------Bai tap 3---------------------------------------------------------

// let k = 5;
// for (let i = 1; i <=2*k-1; i++) {
//     for ( let j =1; j <= k; j++) {
//         if (i <=k) {
//             if (j<=i) {
//                 result += ("*");
//             } else { 
//                 result += " ";
//             }
//         } else {
//             if (i>=k+1) {
//                 if (j <= 2*k-i) {
//                     result += ("*");
//                 } else { 
//                     result += " ";
//                 }
//             }
//         }
//     }
//     result += "\n";
// }
// console.log(result);
//                                                      HOAC-bai 3
// let k =5;
// for (let i = 1; i<= 2*k-1; i++) {
//     for ( let j= 1; j<= k; j++) {
//         if ((i<=k && j<=i)||(i>=k+1&&j<=2*k-i)){
//             result += "*";
//         } else {
//             result += " ";
//         }
//     }
//     result += "\n";
// }
// console.log(result);



// ------------------------------------------------------Bai tap 4-----------------------------------------------------

// let k = 7;
// for (let i = 1; i<=k; i++) {
//     for (let j=1; j<=k; j++) {
//         if (i ==k || j == 1 || i == j) {
//             result +="*";
//         } else {
//             result += " ";
//         }
//     }
//     result +="\n";
// }
// console.log (result);

// ---------------------------------------------------------Bai tap 5-----------------------------------------------------

// let k = 6;
// for (let i = 1; i<=k; i++) {
//     for(let j = 1; j<=2*k-1; j++) {
//         if (j<=k) {
//             if (i== k-j+1 || i ==k) {
//                 result +=("*");
//             }
//             else {
//                 result += " ";
//             } 
//         }
//         else {
//             if (j>=k+1) {
//                 if ( i== j - k + 1 || i == k ) {
//                     result += ("*");
//                 }
//                 else {
//                     result += " ";
//                 }
//             }
//         }
//     }
//     result += "\n";
// }
// console.log(result);

//                                                          HOAC-bai5

let k = 6;
for (let i = 1; i<=k; i++) {
    for (let j = 1; j <= 2*k-1; j++) {
        if ((j<=k && (i==k-j+1 || i==k))||(j>=k+1 && (i==j-k+1||i==k))){
            result += "*";
        } else {
            result +=" ";
        }
    }
    result+="\n";
}
console.log(result);


