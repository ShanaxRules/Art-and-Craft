import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPv01muFLxVdaaA0zeGqoP2PTQd9fx8LM",
  authDomain: "arts-and-crafts-cf60f.firebaseapp.com",
  projectId: "arts-and-crafts-cf60f",
  storageBucket: "arts-and-crafts-cf60f.firebasestorage.app",
  messagingSenderId: "826367157577",
  appId: "1:826367157577:web:055322bf2c0877d1dbe698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;