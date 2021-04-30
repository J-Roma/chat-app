const socket = io()

let message = document.querySelector('#message')
let username = document.querySelector('#username')
let btn = document.querySelector('#send')
let output = document.querySelector('#output')
let actions = document.querySelector('#actions')

btn.addEventListener('click', () => {
    
    socket.emit('myMessage',{
        username: username.value,
        message: message.value
    })

})

message.addEventListener('keypress', () => {
    socket.emit('myTyping', username.value)
})

socket.on('myMessage', function (data) {

    actions.innerHTML = ''
    output.innerHTML += `<p>
        <strong>${data.username}: </strong> ${data.message}
    </p>`
})


socket.on('myTyping', (data) => {
    actions.innerHTML = `<p><em>${data} esta Escribiendo</em></p>`
})
