import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzWQmQ5vxVg_Vxqo182FxgWRvLHgfCJRA",
    authDomain: "ecommerce-app-bb64d.firebaseapp.com",
    projectId: "ecommerce-app-bb64d",
    storageBucket: "ecommerce-app-bb64d.appspot.com",
    messagingSenderId: "543128373173",
    appId: "1:543128373173:web:2198db72119c9f0640fbfc",
    measurementId: "G-Q2554SE11H"
  };
// init firebase app
const app = initializeApp(firebaseConfig);

// init service
const db = getFirestore(app);

export default db



