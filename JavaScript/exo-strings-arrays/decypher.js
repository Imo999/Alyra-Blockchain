let CodeCesar = `YRMV`

for (let BoucleAlfa = 0; BoucleAlfa < 2; ++BoucleAlfa) { //Boucle pour répéter X fois l'oppération

  for (let i = 0; i < CodeCesar.length; ++i) { // Boucle pour que Cesar montre les carractère en bas 
    /*console.log(` Ceci est l'index n° : ${CodeCesar.charAt(i)} Code ASCII : ${CodeCesar.charCodeAt(i)}`)*/
    if (i !== '') {
      codeIndex = CodeCesar.charAt(i)
      codeASCII = CodeCesar.charCodeAt(i)

      //console.log(`Index = ${codeIndex}, ASCII ${codeASCII}`)

      //console.log(`${codeIndex} ${BoucleAlfa}`)

      // codeSTR = (`${codeASCII}${BoucleAlfa}`)

      // codeSTR2 = codeSTR.charCodeAt(i)

      console.log(String.fromCharCode(codeASCII));
    }


  }

}
/// IN PROGRESS !!! Y arrive pas trop :x