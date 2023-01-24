// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// import firebase from "firebase";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// import 'firebase/firestore';
import { getFirestore, collection, getDocs} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBk9PeyQRpn-60wQRxIXn-DYvHfMdsxR1o",
  authDomain: "immutime.firebaseapp.com",
  databaseURL: "https://immutime-default-rtdb.firebaseio.com",
  projectId: "immutime",
  storageBucket: "immutime.appspot.com",
  messagingSenderId: "787789468475",
  appId: "1:787789468475:web:9e1925257be6790e3e9d1e"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};

 export const db = getFirestore(app);