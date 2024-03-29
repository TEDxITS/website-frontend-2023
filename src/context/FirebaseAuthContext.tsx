'use client';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React from 'react';

import { auth, googleProvider } from '@/utils/firebase/client';
import { removeFirebaseIdToken, setFirebaseIdToken } from '@/utils/token';

interface FirebaseUserType {
  email: string | undefined | null;
  uid: string | undefined | null;
  role: string | undefined | null;
}

type FirebaseAuthContextType = {
  user: FirebaseUserType;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<void>;
  logInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
};

const FirebaseAuthContext = React.createContext<FirebaseAuthContextType>(
  null as unknown as FirebaseAuthContextType
);

const initialUser: FirebaseUserType = {
  email: null,
  uid: null,
  role: null,
};

function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = React.useState<FirebaseUserType>(initialUser);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const logIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const logInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // React.useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setIsLoading(true);
  //     if (user) {
  //       user.getIdToken().then((idToken) => {
  //         setFirebaseIdToken(idToken);
  //         router.refresh();
  //       });
  //     } else {
  //       removeFirebaseIdToken();
  //       router.refresh();
  //     }
  //     setIsLoading(false);
  //   });

  //   return () => unsubscribe();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
          role: user.email === 'admin@tedxits.org' ? 'admin' : 'user',
        });
        user.getIdToken().then((idToken) => {
          setFirebaseIdToken(idToken);
        });
      } else {
        setUser({ email: null, uid: null, role: null });
        removeFirebaseIdToken();
      }
      router.refresh();
      setIsLoading(false);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React.useEffect(() => {
  //   setUser(initialUser);
  // }, [initialUser]);

  return (
    <FirebaseAuthContext.Provider
      value={{ user, isLoading, signUp, logIn, logInWithGoogle, logOut }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
}

export const useFirebaseAuthContext = () =>
  React.useContext(FirebaseAuthContext);

export default FirebaseAuthProvider;
