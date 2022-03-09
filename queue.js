// QUEUE

class Queue {
  constructor() {
    this.data = []
  }
  enqueue(item) {
    this.data.push(item)
    console.log(`${item} chegou na fila`)
  }

  dequeue() {
    const item = this.data.shift()
    console.log(`${item} saiu da fila`)
  }
}

const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('João')
fila.dequeue()
fila.dequeue()