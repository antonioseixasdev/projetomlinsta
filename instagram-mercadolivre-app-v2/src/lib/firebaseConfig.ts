import { initializeApp, getApps, FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCrcqPyI-1zeXrjii1fOUBkKewbwP9SeTE",
  authDomain: "mlinsta-755c1.firebaseapp.com",
  projectId: "mlinsta-755c1",
  storageBucket: "mlinsta-755c1.appspot.com",
  messagingSenderId: "494724628335",
  appId: "1:494724628335:web:6e80d2b0d10b51e4d2f29a"
};

let firebase_app: FirebaseApp;
if (!getApps().length) {
  firebase_app = initializeApp(firebaseConfig);
} else {
  firebase_app = getApps()[0] as FirebaseApp;
}

export default firebase_app;
