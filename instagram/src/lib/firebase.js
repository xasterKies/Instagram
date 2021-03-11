import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Here is going to be the seed file

const config = {
    apiKey: "AIzaSyBtYzel_YGXvknavvbo5gudzcEEzxdGEas",
    authDomain: "instagram-web-2d786.firebaseapp.com",
    projectId: "instagram-web-2d786",
    storageBucket: "instagram-web-2d786.appspot.com",
    messagingSenderId: "721483244915",
    appId: "1:721483244915:web:8adb3ea997cb8c1eb6d106"
  };

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Here is where the seed file (only once)
// seedDatabase(firebase)

export { firebase, FieldValue }