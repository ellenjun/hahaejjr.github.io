input = document.querySelector('input')
messages = document.querySelector('#messages')
database = firebase.database()

reference = database.ref()


function sendMessage() {
reference.push("Ellen:" +input.value)
input.value = ""
}

function recieveMessage(message) {
  m = message.val()

  messages.innerHTML = "<p>" + m + "</p>" + messages.innerHTML
}

function keyPressed(event) {
  if (event.which == 13) {
    sendMessage()
  }
}

input.addEventListener('keydown', keyPressed)
reference.on('child_added', recieveMessage)
