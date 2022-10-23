// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaBFGaZJC3huSZHr06YctQf1CejQSSnhU",
    authDomain: "dragon-news-d14b5.firebaseapp.com",
    projectId: "dragon-news-d14b5",
    storageBucket: "dragon-news-d14b5.appspot.com",
    messagingSenderId: "415042567686",
    appId: "1:415042567686:web:86b08d637407c2190e0d87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;