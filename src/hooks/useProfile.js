// AUTH & FIREBASE
import { useAuthContext } from './auth/useAuthContext'
import { auth, firestore } from '../firebase/config'
import { updateEmail } from 'firebase/auth'
import { 
  getDocs, query, where, 
  collection,doc, setDoc, getDoc, updateDoc,
  arrayUnion, arrayRemove
} from 'firebase/firestore'

export const useProfile = () => {
  const { dispatch } = useAuthContext()

  const createUserProfile = async (data) => {
    const docRef = doc(collection(firestore, 'userDocs'))
    setDoc(docRef, {...data, id: docRef.id})
  }

  const fetchUserDoc = async (userRef/*, options*/) => {
    const q = query(collection(firestore, 'userDocs'), where('email', "==", userRef.email))
    const querySnapshot = await getDocs(q)
    const [ userDoc ] = querySnapshot.docs
    return userDoc
  }

  const initUser = async (userRef, options) => {
    // FIRST GET USER DOC FROM FIRESTORE
    const userDoc = await fetchUserDoc(userRef, options)
    // WITH USER DOC, SET CONTEXT
    if (userDoc.exists()) {
      dispatch({ type: 'SET_USER', payload: userDoc.data() })
    } else {
      console.log("No such document!");
    }
  }

  const setUser = async (userId) => {
    // FETCH USER DOC AND UPDATE CONTEXT & LOCALSTORAGE
    const docRef = doc(firestore, `userDocs`, userId)
    const updatedDoc = await getDoc(docRef)
    dispatch({ type: 'SET_USER', payload: updatedDoc.data() })
  }

  const addContact = async (userId, values) => {
    const userDoc = doc(firestore, `userDocs`, userId)
    await updateDoc(userDoc, {
      contacts: arrayUnion(values)
    })
    setUser(userId)
  }

  const deleteContact = async (userId, contact) => {
    const userDoc = doc(firestore, `userDocs`, userId)

    await updateDoc(userDoc, {
      contacts: arrayRemove(contact)
    })
    setUser(userId)
  }

  const editContact = async (userId, contact, newValue) => {
    const userDoc = doc(firestore, `userDocs`, userId)
    await updateDoc(userDoc, {
      contacts: arrayRemove(contact)
    })
    await updateDoc(userDoc, {
      contacts: arrayUnion(newValue)
    })
    setUser(userId)
  }                             

  const editUserData = async (userId, value) => {
    const userDoc = doc(firestore, `userDocs`, userId)
    try {
      if (value.email) { 
        updateEmail(auth.currentUser, value.email).then(() => {
          console.log(auth.currentUser)
        })
        updateDoc(userDoc, {
            email: value.email
          }).then(() => {
            setUser(userId)
          })        
      } else if (value.firstName && value.lastName) {
        updateDoc(userDoc, {
          firstName: value.firstName,
          lastName: value.lastName
        }).then(() => {setUser(userId)}) 
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { createUserProfile, initUser, addContact, deleteContact, editContact, editUserData }
}