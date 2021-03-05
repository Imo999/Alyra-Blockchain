const biggest = (BAM) => { // Création de la fonction avec 1 paramètre 

  BAM = Math.max(...BAM) // La fonction math avec le maximum (...BAM) = spread copy 
  return BAM // retour fonction BAM

}
const BAM = [99, 100, 101, 1] // création valeur BAM en tableau 
console.log(biggest(BAM)) // Affichage fonction 

/////////////////

const sortAscend = (BIM) => {
  BIM = BIM + "";

  return BIM.split("").reverse().join("");
}

console.log(sortAscend([99, 100, 101, 1]))
// corection solution !!! 
const sortAscend2 = (BOUM) => {
  return BOUM.sort((a, b) => { return a - b })

}

console.log(sortAscend2([99, 110, 101, 1]))