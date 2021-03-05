let text =
  "Je suis le ténébreux, - le veuf, - l'inconsolé,\n\
Le prince d'Aquitaine à la tour abolie :\n\
Ma seule étoile est morte, - et mon luth constellé\n\
Porte le soleil noir de la Mélancolie.\n\
\n\
Dans la nuit du tombeau, toi qui m'as consolé,\n\
Rends-moi le Pausilippe et la mer d'Italie,\n\
La fleur qui plaisait tant à mon cœur désolé,\n\
Et la treille où le pampre à la rose s'allie.\n\
\n\
Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la reine ;\n\
J'ai rêvé dans la grotte où nage la sirène...\n\
\n\
Et j'ai deux fois vainqueur traversé l'Achéron ;\n\
Modulant tour à tour sur la lyre d'Orphée\n\
Les soupirs de la sainte et les cris de la fée."

text = text.toLowerCase()
console.log(text)

let nbA = 0
let nbE = 0
let nbI = 0
let nbO = 0
let nbU = 0
let nbY = 0

for (let i = 0; i < text.length; ++i) {
  // Boucle1 i = 0 - Boucle 2 = 1 - Boucle 3 = 2 ....... // i est inférieur a la taille du texte // ++I = rajouter 
  switch (text[i]) {
    case 'e':
    case 'é':
    case 'è':
    case 'ê':
      ++nbE
      break
    case 'a':
      ++nbA
      break
    case 'i':
      ++nbI
      break
    case 'o':
      ++nbO
      break
    case 'u':
      ++nbU
      break
    case 'y':
      ++nbY
      break // Mettre des break sinon ça additionne les Case 77+40+36+38+31+1
  }
}

console.log(`nb E: ${nbE}`)
console.log(`nb A: ${nbA}`)
console.log(`nb I: ${nbI}`)
console.log(`nb O: ${nbO}`)
console.log(`nb U: ${nbU}`)
console.log(`nb Y: ${nbY}`)


