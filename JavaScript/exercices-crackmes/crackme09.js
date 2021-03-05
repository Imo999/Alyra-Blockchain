// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'JustASimplePassword'
//XXXXXXXXXXXXXXX 
const crackme9 = (password) => {
  if (password.startsWith('Just') && password.endsWith('Password')) {
    // Commence pas"Just" && Finis par "Password"
    let tmp1 = password.slice(4).slice(0, -8)
    tmp1 = tmp1.split('').reverse().join('')

    if (Number.isNaN(Number(tmp1))) {
      //isNaN = n'est pas un nombre 
      tmp1 += String.fromCharCode(35)
      if (tmp1 === 'e' + 'l' + 'p' + 'm' + 'iSA#') { //REVERS + JOIN
        //Concaténation de string
        console.log('OK')
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}
crackme9(password)

