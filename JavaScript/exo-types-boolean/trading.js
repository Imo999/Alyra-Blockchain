

// Ecrivez un programme qui décidera si vous devez vendre, acheter du Bitcoin ou ne rien faire en fonction d'un prix.


let REALPRIX = 71111

console.log("Le prix du BTC actuel est de " + REALPRIX)

if (REALPRIX >= 70000) {
  console.log('Si le prix du BTC en cloture journalière est de ' + REALPRIX + ' $, ' + 'vender une partie de votre wallet BTC !')

}
else if (REALPRIX <= 30000) {
  console.log('Si le prix du BTC en cloture journalière est de ' + REALPRIX + ' $, ' + 'Renflouer votre Wallet BTC - GO TO THE MOON !')
}
else { console.log('Si le prix du BTC en cloture journalière est de ' + REALPRIX + ' $, ' + 'DONT TOUCH - TO THE MOON !!') }


// Correction by Sofiane : 

let REALPRIX2 = 71111
let BUYBTC = 30000
let SHORTBTC = 70000

console.log("Le prix du BTC actuel est de " + REALPRIX2)

if (REALPRIX2 >= SHORTBTC) {
  console.log('Si le prix du BTC en cloture journalière est de ' + REALPRIX2 + ' $, ' + 'vender une partie de votre wallet BTC !')

}
else if (REALPRIX2 <= BUYBTC) {
  console.log('Si le prix du BTC en cloture journalière est de ' + REALPRIX2 + ' $, ' + 'Renflouer votre Wallet BTC - GO TO THE MOON !')
}
else { console.log('Si le prix du BTC en cloture journalière est de ' + REALPRIX2 + ' $, ' + 'DONT TOUCH - TO THE MOON !!') }