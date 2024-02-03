import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () =>{
    setIsLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log('current user in the state', currentUser?.email);
        setIsLoading(false);

    });

    // const initialUser = auth.currentUser;
    // if(initialUser){
    //   setUser(initialUser);
    //   setIsLoading(false);
    // }
    return () => {
      return unsubscribe();
    };
  },[]);

  const values = {
    user,
    isLoading,
    createUser,
    login,
    logout,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
