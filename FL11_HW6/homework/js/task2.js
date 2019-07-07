let a = prompt("Enter the length of the side a");
let b = prompt("Enter the length of the side b");
let c = prompt("Enter the length of the side c");

let firstSide = a < b + c;
let secondSide = b < a + c;
let thirdSide = c < b + a;

if (firstSide && secondSide && thirdSide) {
  if (a === b && a === c && a !== null) {
    console.log('Eequivalent triangle');
  } else if (a === b || b === c || a === c) {
    console.log('Isosceles triangle');
  } else if (a !== b && a !== c && c !== b) {
    console.log('Normal triangle');
  }
} else {
  console.log('Triangle doesn’t exist');
}
