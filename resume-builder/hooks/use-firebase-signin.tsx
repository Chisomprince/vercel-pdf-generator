import firebase_app from "@/lib/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function useFirebaseSignIn(
  email: string,
  password: string
) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
