class Pessoa {
  constructor(nome) {
    this.id = Math.random() * 100000
    this.nome = nome
  }

  dizerNome() {
    console.log(this.nome)
  }
}

const pessoa = new Pessoa('rafael')
pessoa

class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }

  get area() {
    return this.#calcularArea()
  }

  #calcular() {
    return this.altura * this.largura
  }
}

let poligono = new Poligono(50, 60)

poligono.area

class Atleta {
  peso
  categoria
  constructor(peso) {
    this.peso = peso
  }

  definirCategoria() {
    if (this.peso <= 50) {
      this.categoria = 'Infantil'
    } else if (this.peso <= 65) {
      this.categoria = 'Juvenil'
    } else {
      this.categoria = 'Adulto'
    }
  }
}

class Lutador extends Atleta {
  constructor(peso) {
    super(peso)
  }

  definirCategoria() {
    if (this.peso <= 54) {
      this.categoria = 'Pluma'
    } else if (this.peso <= 60) {
      this.categoria = 'Leve'
    } else {
      this.categoria = 'Pesado'
    }
  }
}
