//Ecrire une fonction count qui prend comme paramètre
// un nombre min, un nombre max et un nombre step. 
// L'exécution de cette fonction devra afficher 
//sur le terminal tous les nombres de min jusqu'a max avec un intervale de step

const count = (MIN, MAX, STEP) => { // Création de la fonction count avec comme paramêtre MIN, MAX, STEP

  for (MIN; MIN <= MAX; MIN += STEP) // MIN; MIN est inférieur à MAX, STEP + ou = à la valeur
    console.log(MIN) // afficher MIN


}

count(1, 10, 1) // Paramètre de la fonction : 1 = MIN, 10 = MAX, 1 = STEP






