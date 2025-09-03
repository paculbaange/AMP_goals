import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJWadypUAxO3bzzyxBPB01tfwI0M8P700",
  authDomain: "amp-goals.firebaseapp.com",
  projectId: "amp-goals",
  storageBucket: "amp-goals.firebasestorage.app",
  messagingSenderId: "427499438106",
  appId: "1:427499438106:web:2ae96fb7da4427db8191a3"
};
//

const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);