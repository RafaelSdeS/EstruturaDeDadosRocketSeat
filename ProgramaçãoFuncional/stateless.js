// Não guarda estado

// Stateful
let number = 2
function square() {
  return number * number
}
number = square()

// stateless
const square = n => n * n
