import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import app from "../pages/firebase.config";

export const AuthContext = createContext(null);

const Authentication = ({ children }) => {
  const [currentUser, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signUP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutuser = () => {
    return signOut(auth);
  };

  const signUpByGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        setUser(user);
        console.log(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [auth]);
  const send = {
    currentUser,
    setUser,
    signin,
    signUP,
    signOutuser,
    signUpByGoogle,
  };
  return <AuthContext.Provider value={send}>{children}</AuthContext.Provider>;
};

export default Authentication;
