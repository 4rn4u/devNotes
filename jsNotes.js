// Arrow Functions
// Declaración de función regular
function sumar(a, b) {
  return a + b
}
// Función flecha
const sumarFlecha = (a, b) => {
  return a + b
}
// Función flecha con return implícito
const sumarFlecha = (a, b) => a + b


// .push()
// El método .push() nos permite añadir un elemento al final de un array:
const frutas = ["plátano", "fresa"]
frutas.push("naranja")
console.log(frutas) // ["plátano", "fresa", "naranja"]


// .pop()
//El método .pop() elimina y devuelve el último elemento de un array:
const frutas = ["plátano", "fresa", "naranja"]
const ultimaFruta = frutas.pop()

console.log(frutas) // ["plátano", "fresa"]
console.log(ultimaFruta) // "naranja"


// .shift()
//El método .shift() elimina y devuelve el primer elemento de un array. Es lo mismo que .pop(), pero con el primer elemento en lugar del último:
const frutas = ["plátano", "fresa", "naranja"]
const primeraFruta = frutas.shift()

console.log(frutas) // ["fresa", "naranja"]
console.log(primeraFruta) // "plátano"


//.unshift()
//El método .unshift() añade un elemento al principio de un array. Es lo mismo que .push(), pero con el primer elemento en lugar del último:
const frutas = ["plátano", "fresa", "naranja"]
frutas.unshift("manzana")

console.log(frutas) // ["manzana", "plátano", "fresa", "naranja"]


// El método array.forEach()
let frutas = ['🍎', '🍌', '🍓']

frutas.forEach(function (fruta, index, originalArray) {
  console.log(fruta) // imprime el elemento en la posición i
})


// indexOf: ¿En qué posición está el elemento?
const emojis = ['✨', '🥑', '😍']

const posicionCorazon = emojis.indexOf('😍')

console.log(posicionCorazon) // -> 2


// includes: ¿El elemento existe en el Array?
const emojis = ['✨', '🥑', '😍']

const tieneCorazon = emojis.includes('😍')

console.log(tieneCorazon) // -> true


// some: ¿Alguno de los elementos cumple con la condición?
const emojis = ['✨', '🥑', '😍']

const tieneCorazon = emojis.some(emoji => emoji === '😍')
console.log(tieneCorazon) // -> true


// every: ¿Todos los elementos cumplen con la condición?
// ¿Todos los emojis son felices?
const emojis = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

// ¿Todos los números son pares?
const numbers = [2, 4, 7, 10, 12]
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const names = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true


// find: Devuelve el primer elemento que cumple con la condición
const numbers = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers.find(number => number < 0)

console.log(firstNegativeNumber) // -> -10


// findIndex: Devuelve el índice del primer elemento que cumple con la condición
const numbers = [13, 27, 44, -10, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numbers[firstNegativeNumberIndex]) // -> -10


// Ordenamiento básico con sort()
let numeros = [5, 10, 2, 25, 7]

numeros.sort(function(a, b) {
  return a - b
})

console.log(numeros) // [2, 5, 7, 10, 25]


// sort() y toSorted() => new array


// filter: Un nuevo Array con los elementos que cumplan una condición
const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings.filter(string => string.includes('a'))

console.log(stringsWithA) // ['hola', 'adiós', 'casa', 'gato']


// map: Un nuevo Array con los elementos transformados
const strings = ['hola', 'javascript', 'midu', 'programación']

const stringsLength = strings.map((string) => string.length)

console.log(stringsLength) // [4, 10, 4, 12]


// map + filter: Un nuevo Array con los elementos transformados y filtrados
const numbers = [1, 2, 3, 4, 5, 6, 7]

const numsGreaterThanFive = numbers
  .map(number => number * 2) // [2, 4, 6, 8, 10, 12, 14]
  .filter(number => number > 5) // [6, 8, 10, 12, 14]

console.log(numsGreaterThanFive) // [6, 8, 10, 12, 14]


/* reduce: Un único valor a partir de un array
El método reduce es un poco más complejo que los anteriores. Este método te permite crear un único valor a partir de un Array.

Recibe dos parámetros: una función que se ejecutará por cada elemento y un valor inicial, opcional, que será donde podremos acumular los valores.

El primer parámetro de reduce, que es la función que se ejecutará por cada elemento, recibe tres parámetros:

El acumulador: el valor que se va a ir acumulando en cada iteración
El elemento actual: el elemento del Array que estamos iterando en ese momento.
El índice: la posición del elemento actual en el Array.
Y debe devolver el valor que se va a acumular en cada iteración.

Un caso de uso muy típico de reduce es sumar todos los elementos de un Array: */
const numbers = [1, 2, 3]

const sum = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber
}, 0) // <- el 0 es el valor inicial

console.log(sum) // 6