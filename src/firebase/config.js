import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDP10mm7LYVGT8cewJunuM9ypWA0am-Kq0",
  authDomain: "comprasuy-18768.firebaseapp.com",
  projectId: "comprasuy-18768",
  storageBucket: "comprasuy-18768.appspot.com",
  messagingSenderId: "108824650141",
  appId: "1:108824650141:web:6ac8812ec3ed737f030f74",
};

const app = firebase.initializeApp(firebaseConfig)


export const getFirestore = () => {
    return firebase.firestore(app)
}

