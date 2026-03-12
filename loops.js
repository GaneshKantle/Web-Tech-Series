// // for (let i=1; i<=10; i++){
// //     console.log(i);
// // }
// // console.log(".........................................................");
// // for (let i=50; i<=75; i++){
// //     console.log(i);
// // }
// // console.log(".........................................................");
// // for (let i=1; i<=100; i++){
// //     console.log(i);
// // }

// //program to print the numbers from range from 1-10
// //program to print a nujmber range from 1-100
// //program to print a nub=mber range frmo 50-75

// //progarm to print a number the multiple of 2 1-100
// for(let i=0; i<=100; i+=2){
//     console.log(i);
// }

// //program to print a numbe which a divisible by 5 range 1-100
// for(let i=0; i<=100; i+=5){
//     console.log(i);
// }

// //program to print a numbe which a divisible by 10 range 1-1000
// for (let i=0; i<=1000; i+=10){
//     console.log(i);
// }

//program to print range from a and b given by the user
// let a = Number(prompt("Enter the number A: "))
// let b = Number(prompt("Enter the number B: "))
// if(isNaN(a) || isNaN(b) || a>b){
//     console.log("Invalid");
// }
// else{
//     for(let i=a; i<=b; i++){
//         console.log(i);
//     }
// }

//write a program to print multiplication table as per choice
// let a = Number(prompt("Enter the table number: "));
// if (isNaN(a) || a < 0) {
//   console.log("Invalid");
// } else {
//   for (let i = 0; i <= 100; i ++) {
//     console.log(`${a} x ${i} = ${i * a}`);
//   }
// }

//write a program to print of user chosi range frmo a to b// let a = Number(prompt("Enter the table number: "));
let a = Number(prompt("Enter the table number: "));
let f = Number(prompt("Enter the Starting Range: "));
let g = Number(prompt("Enter the Ending Range: "));
if (isNaN(a) || isNaN(f) || isNaN(g)) {
  if ( a < 0 ){
    console.log("No negative numbers");
  } else {
    for (let i = f; i <= g; i++) {
      console.log(`${a} x ${i} = ${i * a}`);
    }
  }
} else {
  console.log("Invalid string");
}
