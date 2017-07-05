
database = firebase.database()

// create a reference to this url
reference = database.ref()
// alert(reference.toString())

function sendMessage() {
  reference.set(input.value)
  input.value = ""
}

function onMessage(message) {
  h1.innerText = message.val()
}

h1 = document.querySelector("h1")
input = document.querySelector("input")
button = document.querySelector("button")

button.onclick = sendMessage
reference.on("value", onMessage)
