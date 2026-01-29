/*let a = Number(prompt("Inter your value a "));  //  Faulty Calculator
let b = Number(prompt("Inter your value b "));

let random = Math.random();

let Addition = a + b;
let Subtraction = a - b;
let Multiplication = a * b;
let Division = a / b;
let Exponentiation = a ** b;

if (random < 0.1) {
  console.log("Addition Calculation:", a - b);
  console.log("Subtraction Calculation:", a / b);
  console.log("Multipication Calculation:", a + b);
  console.log("Division Calculation:", a ** b);
  console.log("Exponentiaton Calculation:", a * b);
} else {
  console.log("Addition Calculation:", a + b);
  console.log("Subtraction Calculation:", a - b);
  console.log("Multipication Calculation:", a * b);
  console.log("Division Calculation:", a / b);
  console.log("Exponentiaton Calculation:", a ** b);
}*/

let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
}


if (random > 0.1) {
  console.log(`The result is ${a} ${c} ${b}`)
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}

else {
  c = obj[c]
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}