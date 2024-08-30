 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDCIfCwa7kfs2pXYTc4C6TBDARxN8_93IM",
   authDomain: "form-a8c36.firebaseapp.com",
   projectId: "form-a8c36",
   storageBucket: "form-a8c36.appspot.com",
   messagingSenderId: "530943594154",
   appId: "1:530943594154:web:e4a2e2d348490c2b908ad3"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export{auth}