let tab = ['Js', 'Solidity', 'Html', 'Css', 'Python', 'Java', 'C++', 'Rust']


for (const elem of tab) {
  console.log(elem)
}


let tab2 = ['Js', 'Solidity', 'Html', 'Css', 'Python', 'Java', 'C++', 'Rust']
// .entries [0, 'JS'], [1, 'Solidity'], [2,'HTML'] ...............[7, 'Rust']

for (const [index, elem] of tab2.entries()) {
  // tab2.entries = S'applique aussi au tableau = Associe chaqu'un des objen en index : ça sappel une destructuration !!
  console.log(`${elem} is at ${index}`)
}