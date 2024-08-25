import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';







const firebaseConfig = {
  apiKey: "AIzaSyDl1ujc6JCD0Fgfg8pTArBCHxsXGvvcuJA",
  authDomain: "portfolio-datnet.firebaseapp.com",
  projectId: "portfolio-datnet",
  storageBucket: "portfolio-datnet.appspot.com",
  messagingSenderId: "172316598974",
  appId: "1:172316598974:web:8dab3bbf19a257b91074ef",
  measurementId: "G-0WTWWKZ3TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db ,storage, ref, uploadBytes};