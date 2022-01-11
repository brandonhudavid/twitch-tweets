import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const config = {
    apiKey: "AIzaSyAYkIXSa5NZdfc1fJi38qnHm0YIF4K2Kak",
    authDomain: "twitch-tweets-bhd.firebaseapp.com",
    projectId: "twitch-tweets-bhd",
    storageBucket: "twitch-tweets-bhd.appspot.com",
    messagingSenderId: "300208345152",
    appId: "1:300208345152:web:1e31b30081383c66e80fa5"
  };

initializeApp(config);
const db = getFirestore();

export default db;
