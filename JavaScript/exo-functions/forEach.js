const forEach = (tab, fn) => { // Création fonction avec 2 parametre 
  for (const elem of tab) {
    fn(elem) // Appeler la fonction ELEM !! 
  }
}
let result = [1, 2, 3, 4, 5]
result.forEach(elem => console.log(elem)) // 