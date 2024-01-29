"use client";
import firebase_app from "@/lib/firebase";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import React, { ReactNode } from "react";

const auth = getAuth(firebase_app);

type AuthContextProps = {
  user: User | null;
};

export const AuthContext = React.createContext<AuthContextProps>({
  user: null,
});

export const useAuthContext = () => React.useContext(AuthContext);

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
