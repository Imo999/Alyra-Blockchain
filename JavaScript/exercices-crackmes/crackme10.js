// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'aiouy'

const crackme10 = (password) => {
  if (
    password
      .trim() // Enlève les Epace 
      .toLowerCase() // miniscule
      .split('') // Traduir en tableau ['a', 'z', '...']
      .filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem)) // Filter = Filtrer
      .map((elem) => elem.charCodeAt()) // .map = 
      .reduce((a, b) => {
        return a + b

      }, 0) %
    2 !==
    0
  ) {

    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme10(password)