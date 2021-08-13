import firebase from 'firebase/app' 
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBkSull3-U_mFHcpwliDXEnEm1S4ld_Byw",
    authDomain: "weight-tracker-a673d.firebaseapp.com",
    projectId: "weight-tracker-a673d",
    storageBucket: "weight-tracker-a673d.appspot.com",
    messagingSenderId: "894930945393",
    appId: "1:894930945393:web:967b69569b87fe9b6822d0"
  };

 export default firebase.initializeApp(firebaseConfig)