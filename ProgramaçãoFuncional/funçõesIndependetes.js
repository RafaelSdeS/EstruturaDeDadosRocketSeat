const random = (number, Math) => Math.floor(Math.random() * number)

const factorial = x => {
  if (x === 0) {
    return 1
  }
  return x * factorial(x - 1)
}
