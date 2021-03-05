//Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est impair, sinon la fonction retournera false.
// Pair = False & Impaire = True

const isOdd = (nb) => {

  if (nb % 2 === 0) { // SI nb = Paire (Modulo 2 === 0)
    return false // Retourne False 
  }
  else { // SINON
    return true // Retourne True 

  }
}

console.log(isOdd(20)) // Affichage
console.log(isOdd(19)) // Affichage

console.log("#################")///////// Parity Exo 2 

const isOdd2 = (nb) => {
  return nb % 2 !== 0
}

const isEven = (nb) => {
  return !isOdd2(nb)
}

console.log(isOdd2(1))
console.log(isEven(1))
