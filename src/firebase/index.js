import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA39fDromgN4IykvK1NQw-0RPS5dGQAxn8",
  authDomain: "gsc-control-panel.firebaseapp.com",
  projectId: "gsc-control-panel",
  storageBucket: "gsc-control-panel.appspot.com",
  messagingSenderId: "964545284233",
  appId: "1:964545284233:web:229a0fc95c4b5082ac9e58",
  measurementId: "G-BVQ54Y5F5C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
