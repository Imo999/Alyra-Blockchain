
console.log(`Si dessous un programme qui n'affiche que les multiples de 3 : `);

for (let nb = 0; nb <= 1000; nb++) {
  if (nb % 3 === 0) {
    console.log(nb);
  }
}

console.log(`\nSi dessous un programme qui n'affiche que les multiples de 7 : `);
for (let nb2 = 0; nb2 <= 1000; nb2++) {
  if (nb2 % 7 === 0) {
    console.log(nb2);
  }
}

/// Correction 
console.log(`\nSi dessous un programme qui n'affiche que les multiples de 3 et de 7 : `);

for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 && i % 7 === 0) {
    console.log(i)
  }
}