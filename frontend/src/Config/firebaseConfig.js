import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA3tJIKSI8iw9F5rh1BwK2MDb00hr-pvks",
  authDomain: "ak-blog-site.firebaseapp.com",
  projectId: "ak-blog-site",
  storageBucket: "ak-blog-site.appspot.com",
  messagingSenderId: "766709067098",
  appId: "1:766709067098:web:71060d4e21a8ee7d331763",
  measurementId: "G-092G3KC1F6"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);