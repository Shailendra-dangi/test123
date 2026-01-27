let a = Number(prompt("Inter your value a "));  //  Faulty Calculator
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
}
