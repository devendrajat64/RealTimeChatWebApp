import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwrtMIa2oyXFXuYIWgqDAhX455OegV9Rg",
    authDomain: "slack-clone-879cf.firebaseapp.com",
    projectId: "slack-clone-879cf",
    storageBucket: "slack-clone-879cf.appspot.com",
    messagingSenderId: "72636361144",
    appId: "1:72636361144:web:19de460e23cd530ec5074d",
    measurementId: "G-QPWHZ75L9V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
   export default db;
  
  