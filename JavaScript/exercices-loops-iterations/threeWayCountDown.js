// Premier décompte avec une boucle For
console.log("Le premier décompte avec une boucle for : ")
for (let i = 101; i > 0; i--) // index = 101 ; Index superieur à 0 ; Index décrémenté 
  if (i % 2 !== 0) { // Sauter de 2 en 2 ; !==0 à paire 

    console.log(i)
  }
console.log("********\n")

//Deuxième décompte avec une boucle While {
console.log("Le deuxième décompte avec une boucle While : ")

let count = 101

while (count > 0) {
  console.log(count)
  count -= 2
}
console.log("********\n")

// Troisième décompte avec une boucle Do While
console.log("Le troisième décompte avec une boucle Do While : ")

let count2 = 101
do {
  console.log(count2)
  count2 -= 2
} while (count2 > 0)
console.log("********\n")
