import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNw2GMkrWg1K989vEIEMJ37pN0eEytSKQ",
  authDomain: "crypto-lister-948f5.firebaseapp.com",
  projectId: "crypto-lister-948f5",
  storageBucket: "crypto-lister-948f5.appspot.com",
  messagingSenderId: "937958924205",
  appId: "1:937958924205:web:7be73d93f2a8b9beda4b24",
  measurementId: "G-NWDG46R1EV"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
