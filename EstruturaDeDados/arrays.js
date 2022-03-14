array1 = ['a', 10, 'd', true]

// PUSH
array1.push('b')

console.log(array1)

// POP
array1.pop()

console.log(array1)

const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']
console.log(pilotos[2])

// FOR
for (let piloto of pilotos) {
  console.log(piloto)
}

// FIND
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// SPLICE
pilotos.splice(1, 0, 'Alosno')

console.log(pilotos)
