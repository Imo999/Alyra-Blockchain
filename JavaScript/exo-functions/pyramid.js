// En vous inspirant de la fonction showStars vue en cours, Ecrire une fonction pyramid qui prend 3 paramètres:

// le nombre d'éléments qui sera la base de la pyramide
// un boolean pour vérifier si la pyramide sera générée à l'envers ou à l'endroit
// une string(un caractère) qui sera le motif à afficher contrairement à l'exemple du cours qui affiche par défaut le caractère *.


const showStars = (nbBase, reverse, BAM) => { // ShowStars =  3 Parramètre : nbBase = Nombre d'éléments, reverse = A l'endroit ou à l'enver, BAM = Carractère 

  let str = '' // Appel à la variable '' = valeur vide
  if (!reverse) { // SI reverse = True 
    for (let i = 1; i <= nbBase; ++i) { // POUR : i = 1; i est inférieur à nbBase; Incrémentation de i donc de 1
      str += BAM.repeat(i) // valeur vide repeat BAM + 1 
      if (i !== nbBase) { // Si i donc 1 n'est pas égale au nombre d'élément nbBase, 
        str += '\n'// on saute une ligne à chaque fois
      }
    }
  } else { // SINON
    for (let i = nbBase; i >= 1; --i) { // POUR : i = 1; i est inférieur à nbBase; Décrémentation de i donc de 1 
      str += BAM.repeat(i) // valeur vide repeat BAM + 1 
      if (i !== 1) { // SI i n'est pas égale à 1 donc, 
        str += '\n'//on saute une ligne à chaque fois
      }
    }
  }
  return str // return la variable str
}

let str1 = showStars(12, true, "Z") // variable str1 = appel à la fonction showStars(paramètres : nbBase = 12, reverse = True, BAM = "Z" )
console.log(str1) // Afficher la variable str1

