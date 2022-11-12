const url = 'http://localhost:5000/api'

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => (api.textContent = JSON.stringify(data)))
    .catch(error => console.error(error))
}

function getUser() {
  fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      city.textContent = data.city
      avatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.error(error))
}

function updateUser(updatedUser) {
  fetch(`${url}/1`, {
    method: 'PUT',
    body: JSON.stringify(updateUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.error(error))
}

const newUser = {
  name: 'Rafael',
  avatar: 'https://picsum.photos/200/300',
  city: 'Pelotas'
}

const updatedUser = {
  name: 'Marcelo',
  avatar: 'https://picsum.photos/200/300',
  city: 'Algo'
}

// addUser(newUser)
getUser()
getUsers()

addUser(newUser)

updateUser(updatedUser)
