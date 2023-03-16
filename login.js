document.getElementById("button").onclick = function(){

    email = document.getElementById('email').value
    password = document.getElementById('password').value
    console.log(email)
    if(email == "bhuvanediga25@gmail.com" && password == 123456)
    {
        window.location.href="idex.html"
      alert("logined")
    }
    else{
      alert("incorrect")
    }
}
function update() {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  var updates = {
    email : email,
    password : password
  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}