const typeOF = BIM => { // Création de la fonction (typeOF) avec comme paramètre (BIM)

  return typeof (BIM) // typeof = Voir la valeur String / number / Object

}

console.log(typeOF("test")) // Fait appel à la fonction typeOF qui valide la valeur "test" en "string"
console.log(typeOF(1)) // Fait appel à la fonction typeOF qui Valide la valeur 1 en "nombre"
console.log(typeOF([1, 2, 3])) // Fait appel à la fonction typeOF qui Valide la valeur [1,2,3] tableau en "Object"