import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import config from "./config";

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export { firebase };
