// REACT
// AUTH
import { useAuthContext } from './auth/useAuthContext'

// FIREBASE
import { firestore } from '../firebase/config'
import { 
  collection, 
  query, 
  where, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  updateDoc,
  arrayUnion
} from 'firebase/firestore'

export const useProfile = () => {
  const { dispatch } = useAuthContext()

  const createUserProfile = async (data) => {
    const docRef = doc(collection(firestore, 'userDocs'))
    setDoc(docRef, {...data, id: docRef.id})
    setUser(docRef.id, { signup: true })
  }

  const fetchUserDoc = async (userRef, options) => {
    if (options && options.signup === true) {
      const docRef = doc(firestore, `userDocs`, userRef)
      const userDoc = await getDoc(docRef)
      return userDoc
    } else {
      const q = query(collection(firestore, 'userDocs'), where('email', "==", userRef.email))
      const querySnapshot = await getDocs(q)
      const [ userDoc ] = querySnapshot.docs
      return userDoc
    }
  }

  const setUser = async (userRef, options) => {
    // FIRST GET USER DOC FROM FIRESTORE
    const userDoc = await fetchUserDoc(userRef, options)
    // WITH USER DOC, SET CONTEXT
    if (userDoc.exists()) {
      dispatch({ type: 'SET_USER', payload: userDoc.data() })
    } else {
      console.log("No such document!");
    }
  }

  const addContact = async (userId, values) => {
    // FIRST GET USER DOC FROM FIRESTORE
    console.log(userId, values)
    const userDoc = doc(firestore, `userDocs`, userId)
    await updateDoc(userDoc, {
      contacts: arrayUnion(values)
    })
  }

  return { createUserProfile, setUser, addContact }
}