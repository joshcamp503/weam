// REACT
// FIREBASE
import { firestore } from '../firebase/config'
import { collection, doc, setDoc } from 'firebase/firestore'

export const useSubRequest = () => {

  const createSubRequest = async (data) => {
    const docRef = doc(collection(firestore, 'subRequests'))
    try {
      await setDoc(docRef, data)
    }
    catch (err) {
      console.log(err)
    }
  }

  return { createSubRequest }
}