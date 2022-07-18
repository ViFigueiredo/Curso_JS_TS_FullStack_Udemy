
// Strings

let umaString = "Um texto"
console.log(umaString.concat(" em um lindo dia.")) // função de concatenar string
console.log(umaString + " em um lindo dia.") // somar string - concatenar
console.log(`${umaString} em um lindo dia.`) // template string - usando variável
 
console.log(umaString[3]) // imprimir string na posição[i]
console.log(umaString.charAt(3)) // imprimir string na posição[i] usando função
 
console.log(umaString.indexOf('texto')) // posição de uma string - inicio ao fim
console.log(umaString.indexOf('texto', 3)) // posição de uma string na posição 3
console.log(umaString.lastIndexOf('texto')) // retorna a posição de uma string - fim ao inicio
console.log(umaString.lastIndexOf('texto', 3)) // a partir da posição 3
 
console.log(umaString.slice(-5, -1)) // fatiar uma string
console.log(umaString.substring(umaString.length - 5, umaString.length - 1)) // outra forma de fatiar
 
console.log(umaString.split(' ')) // dividir uma string - espaços
console.log(umaString.split(' ',2)) // apenas 2x
 
console.log(umaString.toUpperCase()) // maiúscula
console.log(umaString.toLowerCase()) // minúscula