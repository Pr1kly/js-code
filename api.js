const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://testapi.igis-transport.ru/smoothly-aJeq3WVg1PyRIA0A/data/route'

function fetchTodos(){
    console.log('Жди')
    return delay(2000).then(() => {return fetch(url)}).then(response => response.json())
}

fetchTodos()
    .then(data => {
        console.log('Data:', data)
    }).catch(e => console.error(e))