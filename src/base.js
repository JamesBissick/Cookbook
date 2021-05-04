import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbiFoH-fhHZEFL0yq9g_5_uAc9AlQ0LHc",
  authDomain: "cookbook-24e8d.firebaseapp.com",
  databaseURL: "https://cookbook-24e8d-default-rtdb.europe-west1.firebasedatabase.app"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
