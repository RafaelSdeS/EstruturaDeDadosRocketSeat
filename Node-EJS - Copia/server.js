const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  const items = [
    { title: 'D', message: 'Desenvolvedor' },
    { title: 'E', message: 'EJS usa JS' },
    { title: 'M', message: 'Muito fácil' },
    { title: 'A', message: 'Amorzinho' }
  ]
  res.render('pages/index', {
    qualitys: items
  })
})

app.get('/sobre', function (req, res) {
  res.render('pages/about')
})

app.listen(8080)

console.log('rodando')
