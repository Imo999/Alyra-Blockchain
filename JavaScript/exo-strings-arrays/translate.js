let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
/*
str
  .trim()
  .toUpperCase()
  .split(' ')
  .forEach((elem) => console.log(`mot: ${elem}`))

*/

// New méthode : 

str1 = str.toUpperCase().trim().split(' ')

for (let elem of str1)
  console.log(`Mot : ${elem}`)


