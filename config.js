import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDiPOXmuHT9kB6IHlCKCaEHYux5rkpZ0-g",
  authDomain: "booksanta-d3371.firebaseapp.com",
  databaseURL:"https://booksanta-d3371.firbaseio.com",
  projectId: "booksanta-d3371",
  storageBucket: "booksanta-d3371.appspot.com",
  messagingSenderId: "827521571648",
  appId: "1:827521571648:web:316fc9477b5def34e7f8a5",
  measurementId: "G-FXNMC3E017"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
