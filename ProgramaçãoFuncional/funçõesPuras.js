// impura
function calculateCir(radius){
  return Math.PI * (radius + radius)
}

// alterando dado externo
let person = {
  name: "Rafael",
  age: "jovem"
}

function changeName(name){
  person.name = name
}

// função pura
const calculateCircumference = function (pi, radius){
  return pi*(radius+radius)
}

const c = (pi, radius) => pi*(radius+radius)

const changePersonName = (person, name) => {...person, name}