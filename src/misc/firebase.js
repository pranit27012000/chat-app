import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config={
  apiKey: "AIzaSyBioiz8ucqOs4Hg6QpulEH8AqWtGITeSe8",
  authDomain: "chat-web-app-6167d.firebaseapp.com",
  projectId: "chat-web-app-6167d",
  storageBucket: "chat-web-app-6167d.appspot.com",
  messagingSenderId: "197173785902",
  appId: "1:197173785902:web:0612f35668acab8fa4f6bf"
};

// eslint-disable-next-line no-unused-vars
const app = firebase.initializeApp(config);
export const auth =app.auth();
export const database =app.database();