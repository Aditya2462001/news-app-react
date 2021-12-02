import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyClrTxCjJEl1umJIzhnEm5i4tAOmYQFmM4",
    authDomain: "news-app-dfc95.firebaseapp.com",
    projectId: "news-app-dfc95",
    storageBucket: "news-app-dfc95.appspot.com",
    messagingSenderId: "201959168085",
    appId: "1:201959168085:web:d86908fbc96bbd53541cdc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.auth();

