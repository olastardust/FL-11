let a1 = prompt("enter A's first coordinate");
let a2 = prompt("enter A's second coordinate");
let b1 = prompt("enter B's first coordinate");
let b2 = prompt("enter B's second coordinate");
let c1 = prompt("enter C's first coordinate");
let c2 = prompt("enter C's second coordinate");
let x = (a1 + b1) / 2;
let y = (a2 + b2) / 2;
if (c1 === x && c2 === y) {
  console.log(true);
} else {
  console.log(false);
}
