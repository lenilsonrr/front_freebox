import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router'
import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCAkGsIJ3dLZ4aHchycjz788BElySyzrmc",
  authDomain: "free-box-bb73a.firebaseapp.com",
  projectId: "free-box-bb73a",
  storageBucket: "free-box-bb73a.appspot.com",
  messagingSenderId: "692557818879",
  appId: "1:692557818879:web:4966ec0854b52b5bdfd5ca"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
