let text = `In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems.
As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.
The most common characters are Alice and Bob. Eve, Mallory, and Trent are also common names.`

console.log(text)
console.log("")

let newtext = text.replace(/Alice/gi, "Romain")

console.log(newtext)
console.log("")

//meilleur solution 

let name1 = "Alice"
let name2 = "Romain"

console.log(text.replaceAll(name1, name2))
