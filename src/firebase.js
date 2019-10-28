import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAUIxVT7WNAM9yiVlU6NDr-1oDaTnEwYVE",
    authDomain: "todoist-clone-27.firebaseapp.com",
    databaseURL: "https://todoist-clone-27.firebaseio.com",
    projectId: "todoist-clone-27",
    storageBucket: "todoist-clone-27.appspot.com",
    messagingSenderId: "52885477821",
    appId: "1:52885477821:web:0fd0ff40661ab9e30b1ad4",
    measurementId: "G-8CPWZ1LGS5"
});

export {firebaseConfig as firebase};
