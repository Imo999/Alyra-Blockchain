let auteur = `Gustave Flaubert`
let livre = `Salammbô`
let texte = `C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.`

console.log(`L'extrait que vous allez lire provient du live de ${auteur} portant le nom de : ${livre}, ayant le nombre de caractères : ${texte.length} \n`)

for (let i = 0; i < texte.length; ++i) {
  console.log(`L'index est : ${i} pour le caractère : ${texte[i]}`)
}