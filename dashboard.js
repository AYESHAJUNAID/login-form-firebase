import { getAuth,signOut,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./firebase.mjs";

var sign_Out = document.getElementById("sign")
sign_Out.addEventListener("click",function(){
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = "index.html"
      }).catch((error) => {
        // An error happened.
      });
})

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      window.location.href = "index.html"
      // ...
    }
  });
  