// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbh0xkIOnFgbKGmE-g5w5PI9_TkuWYrsM',
  authDomain: 'travel-app-5279f.firebaseapp.com',
  projectId: 'travel-app-5279f',
  storageBucket: 'travel-app-5279f.appspot.com',
  messagingSenderId: '881999559272',
  appId: '1:881999559272:web:c2168d7e791acc286a59dd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
