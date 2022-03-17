
// this is context api for authentication

import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";


import { auth } from "../firebase";

const userAuthContext = createContext();

//childrens  = components
export function UserAuthContextProvider({ children }) {

  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }


  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  //to notify a particular user is logged in => onAuthStateChanged
  useEffect(() => {
      
    //runs only once when the user is logged in
    //when component is mounted
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    console.log(user);

    //when componenet is unmounted
    return () => { 
      unsubscribe();
    };
  }, []);

  //returns context provider
  //prop as a value to pass
  return (
    <userAuthContext.Provider
      value={{user, logIn, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

//to wrap the useContext, so to use it everywhere
export function useUserAuth() {
  
  return useContext(userAuthContext);
}