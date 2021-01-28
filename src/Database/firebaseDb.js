import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAEhgm_cc8qvtrwbeIe6NWnLR0YlzQIICA",
    authDomain: "nodewithfirebase-e6559.firebaseapp.com",
    databaseURL: "https://nodewithfirebase-e6559-default-rtdb.firebaseio.com",
    projectId: "nodewithfirebase-e6559",
    storageBucket: "nodewithfirebase-e6559.appspot.com",
    messagingSenderId: "244334719789",
    appId: "1:244334719789:web:7fbf513e26c6245c8459a4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();