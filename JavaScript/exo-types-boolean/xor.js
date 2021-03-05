
// Exemple "^" => False

let aa = 4;
let bb = 4;

console.log("Exemple JS => False");
console.log(aa ^ bb);

// Exemple "^" => True

let cc = 5;
let dd = 3;

console.log("Exemple JS => True");
console.log(cc ^ dd);

// Correction by Sofiane :

let c = false
let d = false

if ((c && !d) || (!c && d)) {
  console.log('TRUE')
} else {
  console.log('FALSE')
}
