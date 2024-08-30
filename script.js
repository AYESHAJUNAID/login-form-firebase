import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./firebase.mjs";
var email = document.getElementById("email")
var password = document.getElementById("password")
var create_acc = document.getElementById("create-acc")
var  login = document.getElementById("login")
var changepassword = document.getElementById("change-password")
create_acc.addEventListener("click",function(){
  event.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, password.value)
    
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    sendEmailVerification(auth.currentUser)
    .then(() => {
    alert("Your Account is created")
    // Email verification sent!
    // ...
  });

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})
login.addEventListener("click",function(){
event.preventDefault()
  signInWithEmailAndPassword(auth, email.value , password.value )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("login successfully!!")
    if(user.emailVerified){
      alert("email is verifird")
      window.location.href = "dashboard.html"
      
    }else{
      alert("your email is not verified")
    }



    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

})


changepassword.addEventListener("click",function(){

  sendPasswordResetEmail(auth, email.value)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})