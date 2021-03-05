

let firstName = 'Alice'
let gender = 'female' // Je pars du principe que l'utilisateur coche Male ou Female sur un questionnaire

let msg = `Bonjour ${firstName} vous êtes entré${gender === 'female' ? 'e' : ''} sur le chan`
console.log(msg)


/// Correction on peut le mettre en console log

let firstName2 = 'Bob'
let gender2 = 'male'

console.log(`Bonjour ${firstName2} vous êtes entré${gender2 === 'female' ? 'e' : ''} sur le chan`)

