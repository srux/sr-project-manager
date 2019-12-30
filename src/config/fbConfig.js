 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAXPwUk3c3NOvSwNpQ8etVAkyxtA-AntZQ",
    authDomain: "sr-project-manager.firebaseapp.com",
    databaseURL: "https://sr-project-manager.firebaseio.com",
    projectId: "sr-project-manager",
    storageBucket: "sr-project-manager.appspot.com",
    messagingSenderId: "761172386995",
    appId: "1:761172386995:web:01552de72f69af4e383cc6",
    measurementId: "G-PQE1E0C572"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  // firebase.firestore().settings({
  //     timestampInSnapshots:true
  // })

  export default firebase;