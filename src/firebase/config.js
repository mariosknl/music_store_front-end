import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDZyLuYqMreO_us2bUKM21mNoje_kxYNMw',
  authDomain: 'music-store-a890e.firebaseapp.com',
  databaseURL: 'https://music-store-a890e.firebaseio.com',
  projectId: 'music-store-a890e',
  storageBucket: 'music-store-a890e.appspot.com',
  messagingSenderId: '1042649234158',
  appId: '1:1042649234158:web:8f86845290e32c318451ff',
  measurementId: 'G-QK0EQGFD2B',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
