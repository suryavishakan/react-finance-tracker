import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setError(null);
    setLoading(true);
    try {
      // signup user
      const res = await auth.createUserWithEmailAndPassword(email, password);

      if (!res) {
        throw new Error("could not complete signup");
      }

      // add display name to user
      await res.user.updateProfile({ displayName: name });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      // update state
      if (!isCancelled) {
        setLoading(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, loading, signup };
};

export default useSignup;
