const add = (nb1, nb2) => { // Création de la fonction avec 2 paramètres
  let somme = nb1 + nb2; // Création d'une variable resultat de l'addition nb1 + nb2
  return somme; // affichage Resultat 
}

const sub = (nb1, nb2) => { // Création de la fonction avec 2 paramètres 
  let reste = nb1 - nb2; // Création d'une variable resultat de la soustraction nb1 - nb2
  return reste; // affichage Resultat 
}

const mul = (nb1, nb2) => { // Création de la fonction avec 2 paramètres
  let resultat = nb1 * nb2; // Création d'une variable resultat de la multiplication nb1 * nb2
  return resultat; // affichage Resultat 
}

const div = (nb1, nb2) => { // Création de la fonction avec 2 paramètres
  let quotient = nb1 / nb2; // Création d'une variable resultat de la division nb1 / nb2
  return quotient; // affichage Resultat 
}

const calc = (symbol, nb1, nb2) => { // Création de la fonction avec 3 paramètres 
  if (symbol === '+') { // SI 1 er paramètre est strictement égal à string '+' 
    return add(nb1, nb2); // Return la fonction add (ligne 1)
  }
  if (symbol === '-') { // SI 1 er paramètre est strictement égal à string '-'
    return sub(nb1, nb2); // Return la fonction add (ligne 6)
  }
  if (symbol === '*') { // SI 1 er paramètre est strictement égal à string '*'
    return mul(nb1, nb2); // Return la fonction add (ligne 11)
  }
  if (symbol === '/') { // SI 1 er paramètre est strictement égal à string '/'
    return div(nb1, nb2); // Return la fonction add (ligne 16)
  }
  else { // SINON
    console.log("ERROR 404") // Affichage message 

  }
}


console.log(calc('+', 2, 4)); // Affichage message de l'addition
console.log(calc('-', 2, 4)); // Affichage message de la soustraction
console.log(calc('*', 2, 4)); // Affichage message de la multiplication 
console.log(calc('/', 2, 4)); // Affichage message de la division
console.log(calc('', 2, 4)); // Affichage message du message d'érreur
