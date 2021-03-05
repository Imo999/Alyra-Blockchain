/////// Exercice by Sofiane //////

let age = 18
let canVote = false
if (age >= 18) {
  canVote = true
} else {
  canVote = false
}
if (canVote) {
  console.log('You can vote')
} else {
  console.log('You can not vote')
}


/////// Solution N°1 //////
let age2 = 18
let msg = age2 >= 18 ? 'you can vote YOUHOU !!!' : 'you can note vote'
console.log(msg)

/////// Solution N°2 //////
let age3 = 18
let canVote3 = true
let msg2 = age3 >= 18 && canVote3 === true ? 'BIM BAM BOUM !!!! you can vote !!!!' : 'OHHHHH !!!!! you can not vote !!!!!'
// je suis pas sur de ça 
console.log(msg2)

/////// Solution N°3 //////

let age4 = 17
let canVote4 = false
if (age4 >= 18) {
  canVote4 = true
  console.log('BLAAAAAAAAAAAAAAAAA !!!! You can vote')
} else {
  canVote4 = false
  console.log('OHNOOOOOOOOOOOOOOOOOOO !!!! You can not vote')
}


////// Correction ///////

let age5 = 17
let canVote5 = age >= 18 ? true : false
console.log(`${canVote5 ? 'Correction : You can vote' : 'Correction : You can not vote'} `)