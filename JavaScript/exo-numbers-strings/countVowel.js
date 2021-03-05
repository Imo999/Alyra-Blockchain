let texte = `Je suis le ténébreux, - le veuf, - l'inconsolé,
Le prince d'Aquitaine à la tour abolie :
Ma seule étoile est morte, - et mon luth constellé
Porte le soleil noir de la Mélancolie.

Dans la nuit du tombeau, toi qui m'as consolé,
Rends-moi le Pausilippe et la mer d'Italie,
La fleur qui plaisait tant à mon cœur désolé,
Et la treille où le pampre à la rose s'allie.

Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?
Mon front est rouge encor du baiser de la reine ;
J'ai rêvé dans la grotte où nage la sirène...

Et j'ai deux fois vainqueur traversé l'Achéron ;
Modulant tour à tour sur la lyre d'Orphée
Les soupirs de la sainte et les cris de la fée.`


console.log(`Le nombre de voyelle dans ce texte est de : ${texte.toLowerCase().match(/[aeiouyéèàùê]/gi).length} \n Ci dessous le détail des voyelles : \n`)

console.log(`Le nombre de "a" dans ce texte est de : ${texte.toLowerCase().match(/a/g).length}`)
console.log(`Le nombre de "e" dans ce texte est de : ${texte.toLowerCase().match(/e/g).length}`)
console.log(`Le nombre de "i" dans ce texte est de : ${texte.toLowerCase().match(/i/g).length}`)
console.log(`Le nombre de "o" dans ce texte est de : ${texte.toLowerCase().match(/o/g).length}`)
console.log(`Le nombre de "u" dans ce texte est de : ${texte.toLowerCase().match(/u/g).length}`)
console.log(`Le nombre de "é" dans ce texte est de : ${texte.toLowerCase().match(/é/g).length}`)
console.log(`Le nombre de "è" dans ce texte est de : ${texte.toLowerCase().match(/è/g).length}`)
console.log(`Le nombre de "à" dans ce texte est de : ${texte.toLowerCase().match(/à/g).length}`)
console.log(`Le nombre de "ù" dans ce texte est de : ${texte.toLowerCase().match(/ù/g).length}`)
console.log(`Le nombre de "ê" dans ce texte est de : ${texte.toLowerCase().match(/ê/g).length}`)

