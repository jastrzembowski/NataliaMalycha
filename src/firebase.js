// Import the functions you need from the SDKs you need// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlJfkCEhIZRv11MCvL2VZ1vAVEMhIyOww",
  authDomain: "natalia-7d2cb.firebaseapp.com",
  databaseURL: "https://natalia-7d2cb-default-rtdb.firebaseio.com/",
  projectId: "natalia-7d2cb",
  storageBucket: "natalia-7d2cb.appspot.com",
  messagingSenderId: "456504383263",
  appId: "1:456504383263:web:5881e6c206aad13777022a"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true})
export const auth = firebase.auth()
export default firebase