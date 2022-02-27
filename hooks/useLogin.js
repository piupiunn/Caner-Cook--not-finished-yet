import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
//
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function useLogin() {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        dispatch({ type: "LOGIN", payload: response.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, login };
}
