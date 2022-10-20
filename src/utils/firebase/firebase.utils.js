import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, query } from 'firebase/firestore';



// config object from firebase
const firebaseConfig = {
  apiKey: "AIzaSyCoZ5d25CrvvBkHFzChrVQrlJtVtozW9bA",
  authDomain: "ztm-ecommerce-1b5b2.firebaseapp.com",
  projectId: "ztm-ecommerce-1b5b2",
  storageBucket: "ztm-ecommerce-1b5b2.appspot.com",
  messagingSenderId: "322726087019",
  appId: "1:322726087019:web:f8a7be6a7cc126c3c6e42e"
};

// Initialize Firebase with config object
const app = initializeApp(firebaseConfig);

// initialize google provider for google sign in functionality 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

// initialize auth object with our app 
const auth = getAuth(app);



// function to use built in google sign in firebase function 
export const googleSignIn = () => signInWithPopup(auth, provider);

// function to use built in email / password registration firebase function 
export const registerWithEmailPassword = async (email, pass) => {
  return await createUserWithEmailAndPassword(auth, email, pass); 
}; 

// function to use built in email / password signin firebase function 
export const logWithEmailPassword = async (email, pass) => {
  return await signInWithEmailAndPassword(auth, email, pass)
}

// function to use built in signout firebase function 
export const logOut = async () => {
  await signOut(auth);
}

// initialize firestore db with our app 
const db = getFirestore(app); 

// function to create a user doc in firestore. happens whenever we register or google sign in a user. checks to see if user exists in firestore, 
//if not creates new doc 
// ! now returns data instead of userDocRef for use in our user reducer via redux-saga 
export const createUserDocument = async (userAuthObject, additionalInfo = {}) => {

  const userDocRef = doc(db, 'users', userAuthObject.uid); 
  
  const userSnapshot = await getDoc(userDocRef); 

  if (!userSnapshot.exists()) { 
    
    const { displayName, email } = userAuthObject
    const createdDate = new Date();

    try {
      await setDoc(userDocRef, {
        name: displayName, 
        email: email, 
        createdDate: createdDate, 
        ...additionalInfo
      })
    } catch (error) {
      console.log('error creating user', error.message); 
    } 

  }
  return userSnapshot; 
}

// ! only used once, function to initialize our store items in firebase with given array of category objects containing multiple items each 
export const storeLoad = async (collectionName, collectionDocs) => {

  const collectionRef = collection(db, collectionName); 

  for (let document of collectionDocs) {

    const documentRef = doc(collectionRef, document.title.toLowerCase())

    await setDoc(documentRef, {
      title: document.title,
      items: document.items
    })

  }
}


export const getProducts = async () => {

  const productQuery = query(collection(db, 'categories'))

  const results = await getDocs(productQuery)

  const queryResults = results.docs; 
  const categoryArr = queryResults.map((document) => document.data());
  return categoryArr;

}

// auth state listener for user context. sets current user in our context so context and auth stay in sync 
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);


// wrapping our onAuthStateChanged listener in a function. we immediately unsusbcribe before resolving / rejecting 
export const getCurrentUser = () => {

  return new Promise((resolve, reject) => {

    const unsubscribe = onAuthStateChanged(
      auth, 
      (userAuth) => {
        unsubscribe();
        resolve(userAuth)
      },
      (error) => {
        unsubscribe();
        reject(error);
      }
    )
  })
}