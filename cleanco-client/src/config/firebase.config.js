
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDekfoFvihqpYQequBWCGtzGQc28szcNoY",
  authDomain: "cleanco-ba884.firebaseapp.com",
  projectId: "cleanco-ba884",
  storageBucket: "cleanco-ba884.appspot.com",
  messagingSenderId: "761758388518",
  appId: "1:761758388518:web:768da0c1b6a2b6591c71e7"
};


const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app);