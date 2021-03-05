const reverseStr = (text) => { // Fonction Reverse avec un parametre 'text'

  return text.split("").reverse().join("")
  // .split : permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.
  // .reverse : La méthode reverse() transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.
  // .join : La méthode join() fusionne l'ensemble des éléments d'un tableau en une chaîne de caractères. Cette méthode utilise le même algorithme que Array.prototype.join()

}

console.log(reverseStr("Bonjour")) // Affichage 


// Paladrome => Un mot que l'on peu lire dans les deux sens,

const ispalindrome = (text) => {

  if (reverseStr(text) === text) {
    return true

  } else {
    return false

  }


}

console.log(ispalindrome("anna")) // Affichage 
