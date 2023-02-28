'use client';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import React from 'react';

import { auth } from '@/utils/firebase';

interface FirebaseUserType {
  email: string | null;
  uid: string | null;
}

type FirebaseAuthContextType = {
  user: FirebaseUserType | null;
  isLoading: boolean;
  signUp: (email: string, password: string) => void;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
};

const FirebaseAuthContext = React.createContext<FirebaseAuthContextType>(
  null as unknown as FirebaseAuthContextType
);

function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<FirebaseUserType>({
    email: null,
    uid: null,
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setUser({ email: null, uid: null });
    await signOut(auth);
  };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({ email: null, uid: null });
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <FirebaseAuthContext.Provider
      value={{ user, isLoading, signUp, logIn, logOut }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
}

export const useFirebaseAuthContext = () =>
  React.useContext(FirebaseAuthContext);

export default FirebaseAuthProvider;
