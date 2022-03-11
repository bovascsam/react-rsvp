import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState, UseState } from "react";
import Loading from "../components/Loading";
import { auth } from "../firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
      onAuthStateChanged(auth,(user) =>{
          SetUser(user);
          setLoading(false);
      });
  }, []);
  if (loading) {
      return <Loading/>;
  }
  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
