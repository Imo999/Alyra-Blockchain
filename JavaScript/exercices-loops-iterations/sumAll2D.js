// Il faut afficher un par un tous les élements des tableaux de names
let tab = [
  [1, 2, 3], // somme = 6
  [4, -5, 7], // somme = 6
  [-3, -6], // somme = -9 
  [10, -13], // somme -3 
] // un tableau de tableau

let somme = 0

for (let i = 0; i < tab.length; ++i) {

  for (let j = 0; j < tab[i].length; ++j)

    somme += tab[i][j]



}

console.log(`La somme dans le tableau est de : ${somme}`)
