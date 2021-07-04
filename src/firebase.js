import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAqEsQF74lMT3Lt1mBFkwP69bqOAFNNd4",
  authDomain: "facebook-clone-12c54.firebaseapp.com",
  projectId: "facebook-clone-12c54",
  storageBucket: "facebook-clone-12c54.appspot.com",
  messagingSenderId: "258559071330",
  appId: "1:258559071330:web:b23d3c0b219984a9962d3b",
  measurementId: "G-EBC69YMBME",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
