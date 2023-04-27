import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const myApp=firebase.initializeApp({
    apiKey: "AIzaSyBZHzQfJ9YY3o1fQDfz0mYrJKDb4pEX7ME",
    authDomain: "my-app-f6d64.firebaseapp.com",
    projectId: "my-app-f6d64",
    storageBucket: "my-app-f6d64.appspot.com",
    messagingSenderId: "932908136911",
    appId: "1:932908136911:web:5ca679fcfea4d9b8c23aba"
})

export const auth=firebase.auth()
const googleProvider=new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle= ()=> {
    auth.signInWithPopup(googleProvider).then((res)=>{
        console.log(res.user)
    }).catch((error)=>{
        console.log(error.message);
    })
}