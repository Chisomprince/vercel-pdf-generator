"use client";
import firebase_app from "@/lib/firebase";
import {
  GoogleAuthProvider,
  OAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendSignInLinkToEmail,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth(firebase_app);

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "resume-97d13.firebaseapp.com",
  // This must be true.
  handleCodeInApp: true,
  dynamicLinkDomain: "resume-97d13.page.link",
};

const AuthService = {
  async loginWithEmail(email: string) {
    return sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  },
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  },
  async loginWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) throw new Error("Unable to authenticate via google");
        const token = credential.accessToken;
        const user = result.user;
        console.log("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log({ errorCode, errorMessage, email, credential });
      });
  },
  async signUpWithLinkedIn() {
    const provider = new OAuthProvider("linkedin.com");
    provider.addScope("r_emailaddress");
    provider.addScope("r_liteprofile");
    return signInWithPopup(auth, provider)
      .then((result) => {
        console.group("LinkedIn");
        console.log(result);
        console.groupEnd();
        return result;
      })
      .catch((error) => {
        console.group("LinkedIn - Error");
        console.log(error);
        console.groupEnd();
        throw error;
      });
  },
};

export default AuthService;
