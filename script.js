const firebaseConfig = {
  apiKey: "AIzaSyANu0jJ2LN5Sg7njNqnamLQ0SKt6R9s7wk",
  authDomain: "trail1-91967.firebaseapp.com",
  databaseURL: "https://trail1-91967-default-rtdb.firebaseio.com",
  projectId: "trail1-91967",
  storageBucket: "trail1-91967.appspot.com",
  messagingSenderId: "1072773254878",
  appId: "1:1072773254878:web:1541971bcfc151a19ffc4f",
  measurementId: "G-T718B0NWTD"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  
  // Set up our register function
  function register () {
  // Get all our input fields
  username = document.getElementById('username').value
  password = document.getElementById('password').value
  email = document.getElementById('email').value
  gender = document.getElementById('gender').value
  phone = document.getElementById('phone').value
  
  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }
  if (validate_field(email) == false || validate_field(gender) == false || validate_field(phone) == false) {
    alert('One or More Extra Fields is Outta Line!!')
    return
  }
  
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser
  
    // Add this user to Firebase Database
    var database_ref = database.ref()
  
    // Create User data
    var user_data = {
      username : username,
      email : email,
      password : password,
      gender : gender,
      phone : phone,
      last_login : Date.now()
    }
  
    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)
  
    // DOne
    window.location.href="idex.html"

    alert('User Created!!')
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message
  
    alert(error_message)
  })
  }
  
  
  
  
  
  
  
  // Validate Functions
  function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
  }
  
  function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
  }
  
  function validate_field(field) {
  if (field == null) {
    return false
  }
  
  if (field.length <= 0) {
    return false
  } else {
    return true
  }
  }
  
  
  

  
