let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eva'] // Mettre en tableau !!!!!  []
for (let i = 0; i <= list.length; ++i) {
  list2 = list[i]
  switch (list2) {
    case 'Alice':
      console.log('Alice want to exchange with Bob')
      break
    case 'Bob':
      console.log('Bob want to exchange with Alice')
      break
    case 'Charlie':
      console.log('Charlie is a generic third participant')
      break
    case 'Craig':
      console.log('Craig is a password cracker')
      break
    case 'Eva':
      console.log('Eve is an eavesdropper')
      break
  }

}
// Correction : Problème de syntaxe Ligne 1 [METTRE EN TABLEAU] !!!!
