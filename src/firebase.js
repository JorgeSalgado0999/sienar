/// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCetc-0x7DLH2rWZzzMZJSo66g1L4dMsHw",
	authDomain: "sienar2022.firebaseapp.com",
	projectId: "sienar2022",
	storageBucket: "sienar2022.appspot.com",
	messagingSenderId: "732444918993",
	appId: "1:732444918993:web:6c10e205a3b86e3f9bb1f0",
	measurementId: "G-H4RCV792EE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore();
