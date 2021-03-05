let text =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
let bob_text = 'bob';

console.log(text.toLowerCase().trim(' '))

let newtext = text.toLowerCase().trim(' ')

if (newtext.includes(bob_text)) {
  console.log(`IL Y A BIEN LE MOT ${bob_text}`)
} else {
  console.log(`Le mot bob n'y est pas !!! `)
}


