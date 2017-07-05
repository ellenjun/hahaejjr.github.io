name = "Ellen"
database = firebase.database()
user = database.ref()
referencex = database.ref("Ellen/x")
referencey = database.ref("Ellen/y")

function mouseMoved(event) {
  referencex.set(event.clientX)
  referencey.set(event.clientY)
}

function userAdded(user) {
var name =  ;

  user.ref.on('value', function(update) {})
}
users.on('child_added', userAdded)

document.addEventListener('mousemove', mouseMoved)
