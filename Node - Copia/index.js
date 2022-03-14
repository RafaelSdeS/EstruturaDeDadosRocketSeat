const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido?',
  'O que eu poderia fazer para melhorar?',
  'O que me deixou feliz?',
  'Quantas pessoas ajudei hoje?'
]

const ask = (index = 0) => {
  process.stdout.write('\n\n' + questions[index] + '>')
}

ask()

const answers = []

process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    console.log(answers)
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
  Bacana Rafael!
  
  O que você aprendeu hoje foi:
  ${answers[0]}`)
})
