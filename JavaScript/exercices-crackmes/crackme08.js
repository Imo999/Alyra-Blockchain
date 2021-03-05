// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '42a'

const crackme8 = (password) => {
  let tmp1 = password.split('').slice(-3, -1).join('') // j'ai pas trop compris le .slice(-3, -1)
  // Split = tableau // .slice Récupere = -1 cest le dernier et -3 // Join = transformation en Srting (Ligne)
  if (Number(tmp1) === 42) {
    // Number = Convertir une string en nombre
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)