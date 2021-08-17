import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCugSlnSzn-OjUJYpbgKczRhq9kwD_KamM",
    authDomain: "amctrlindustrial.firebaseapp.com",
    projectId: "amctrlindustrial",
    storageBucket: "amctrlindustrial.appspot.com",
    messagingSenderId: "713298836036",
    appId: "1:713298836036:web:4c6872de9f49c850469a11"
  };
  
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;