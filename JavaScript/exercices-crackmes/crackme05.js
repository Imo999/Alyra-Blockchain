// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '4321drowssap'

const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'password1234') {
    // Array pour tableau // On Reverse // Join pour mettre en ligne 
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme5(password)