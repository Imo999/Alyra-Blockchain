let res1 = (true && false) || (false && true)
//false || false = false
let res2 = 10 > 11 && 11 > 10
// False && true = false
let res3 = (true || false) && true
//  true && true = true
let res4 = (!true && !false) || (!false && !false)
// False || true = true
let res5 = 'Hello' === 'Hello' && 'World' == 'Word'
// true && false = false
let res6 = (!(20 >= 20) && 7 === 7) || true
// (!true && true) || true 
// !false || true 
// = true 
let res7 = '1' === 1 && '2' == 2 && '3' === 3
// true && false && true
// false
let res8 = !res7
// false = true
let res9 = !res8
// true = false
let res10 = (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)
// (false && false) || (true && true) || (false && true) || (false && true && false)
// true || true || false || false
// true || false
// = true 



console.log(`res1 = ${res1}`)
console.log(`res2 = ${res2}`)
console.log(`res3 = ${res3}`)
console.log(`res4 = ${res4}`)
console.log(`res5 = ${res5}`)
console.log(`res6 = ${res6}`)
console.log(`res7 = ${res7}`)
console.log(`res8 = ${res8}`)
console.log(`res9 = ${res9}`)
console.log(`res10 = ${res10}`)
