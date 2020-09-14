import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBvJdeaZgL5lj1reCPcJpVyASoX-JCQcWY",
    authDomain: "instagram-clone-react-1017f.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-1017f.firebaseio.com",
    projectId: "instagram-clone-react-1017f",
    storageBucket: "instagram-clone-react-1017f.appspot.com",
    messagingSenderId: "585852939335",
    appId: "1:585852939335:web:9a7f0786d42af5c04f1562"
  } );

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage, firebase};

//  export default firebase;