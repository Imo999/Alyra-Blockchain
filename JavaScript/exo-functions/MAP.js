const map = (fn, array) => {
  // On copie le tableau array dans tmpArray pour être sur de ne pas le modifier
  // On utilise pour cela la spread syntax
  const tmpArray = [...array] // Une copie de array.
  const newArray = []
  for (const elem of tmpArray) {
    newArray.push(fn(elem))
  }
  return newArray
}
// Déclaration d'une fonction qui prend une string comme paramètre
// et qui retourne une nouvelle string en majuscule
const capitalize = (str) => {
  return str.toUpperCase()
}

const names = ['alice', 'bob', 'charlie']
let newNames = map(capitalize, names) // Attention capitalize sans parenthèses
console.log(names) // names n'a pas été modifié, output: ['alice', 'bob', 'alice']
console.log(newNames) // output: [ 'ALICE', 'BOB', 'ALICE' ]


// .map prend une fonction et l'applique à 1,2,3
// [1,2,3].map( (elem) => {return elem * 10})
// Table / .methode / (( FONCTION ))