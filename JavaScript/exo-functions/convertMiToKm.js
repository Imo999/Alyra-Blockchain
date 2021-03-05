const convertMiToKm = (BAM) => { // Création de la fonction avec 1 paramètre 
  const miles = 1.60934 // Création variable miles avec la valeur d'un miles
  const kmmiles = miles * BAM // Création variable Kmiles avec la valeur d'un miles multiplier par la valeur de BAM 
  return kmmiles // return variable Kmiles
}

console.log(convertMiToKm(100)) // affichage fontion + value 