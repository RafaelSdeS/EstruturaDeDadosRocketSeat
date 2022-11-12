const url = 'http://localhost:5000/api'

function getUsers() {
  axios
    .get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser() {
  axios
    .post(url, {
      name: 'Rafael',
      avatar: 'https://picsum.photos/200/300',
      city: 'Pelotas'
    })
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

getUsers()

addNewUser()
