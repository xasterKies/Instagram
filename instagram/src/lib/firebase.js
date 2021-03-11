import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Here is going to be the seed file

const config = {};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;