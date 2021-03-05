// correction

let tab = [
  [
    [1, 7, 3],
    [11, 17, 7],
    [-3, -5],
    [5, 13],
  ],
  [
    [2, 4, 6, 8, 10],
    [1, 3, 5],
  ],
  [[0]],
  [[0], [1], [2], [1]],
]

/*let sum = 0         la correction de Sofiane qui marche
for (let i = 0; i < tab.length; ++i) {
  for (let j = 0; j < tab[i].length; ++j) {
    for (let k = 0; k < tab[i][j].length; ++k) {
      sum += tab[i][j][k]
    }
  }
}
console.log(`sum = ${sum}`)*/


/*let sum = 0       // version que j'ai tapez pendant la correction et retourne 0 ???!!! (raison inconnue)
for (let i = 0; i < tab.length; ++i) {
  for (let j = 0; j < tab[i].length; ++j) {
    for (let k = 0; k < tab[i][j].lenght; ++k) { // voila l'affreuses erreur de typo !!!! .lenght au lieu de .length !
      sum += tab[i][j][k]
    }
  }
}
console.log(`sum = ${sum}`)*/

let sum = 0            // celle que j'ai re tapez suite au pb ci-dessus
for (let i = 0; i < tab.length; ++i) {
  for (let j = 0; j < tab[i].length; ++j) {
    for (let k = 0; k < tab[i][j].length; ++k) {
      sum += tab[i][j][k]
    }
  }
}
console.log(`sum = ${sum}`)



/* ma solution
let sum = 0
for (let i = 0; i < tab.length; ++i) {
  console.log(`tableau ${i + 1}:`)
  for (let j = 0; j < tab[i].length; ++j) {
    console.log(`Sommes sous tableau ${j + 1}:`)
    console.log(`${tab[i][j].reduce((a, b) => a + b, 0)}\n`)
    sum += tab[i][j]
  }
}
console.log(`sum = ${sum}`)*/