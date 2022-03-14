const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('saySomething', message => {
  console.log('eu ouvi:', message)
})

ev.emit('saySomething', 'mensagem')
