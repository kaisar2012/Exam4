// for(let i=25; i>=20;i--){
//     console.log(i);
// }





// let san1 = +prompt("san engiz")
// let san2 = +prompt("ekinshi san engiz")

// for(let i = san1; i <= san2;i++){
//     if (i % 2 == 1) {
//         console.log(i + "- tak") 
//     } 
// }


// let san = +prompt("san engiz")

// for(let i=1; i<=10;i++){
//     if(i == 4){
//         break;
//         console.log(i+"toktaityn san");
//     }
//     console.log(i);
// }

// let san = +prompt("san engiz")

// for(let i=10; i>=0;i--){
//     if (i == 9) {
//         continue;
//     } else (i == 5){
//         continue;
//     }
//     console.log(i);
// }


// let san1 = +prompt("birinshi san engiz")
// let san2 = +prompt("ekinshi san engiz")

// for(let i = 10; i<=40; i++){
//     if (i >= 20 && i<=30 && i % 2 == 0)  {
//         continue;
//     }
//     console.log(i);
// }

// let san = +prompt("san ")

// for(let i=1; i<=san;i++){
//       sum = sum + i;
// }

// alert(san+ "qosyndysy" + sum)



let san = +prompt("san rngiz:");

for (let i = 1; i <= san; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
    else if (i % 2 == 0) {
        console.log(i + " jup san. BREAK ");
        break; 
    }
}