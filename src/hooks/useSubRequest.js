// REACT
import { useHelpers } from './useHelpers'
// FIREBASE
import { firestore } from '../firebase/config'
import { 
  collection, doc, setDoc, 
  query, where, getDocs, updateDoc
} from 'firebase/firestore'

export const useSubRequest = () => {

  const { formatValues } = useHelpers()

  const createSubRequest = async (values) => {
    values.ts = Date.now()
    const formattedValues = formatValues(values)
    const docRef = doc(collection(firestore, 'subRequests'))
    try {
      await setDoc(docRef, { ...formattedValues, id: docRef.id} )
    }
    catch (err) {
      console.log(err)
    }
  }

  const fetchSubRequest = async (paramsId) => {
    const q = query(collection(firestore, 'subRequests'), where('id', "==", paramsId))
    const querySnapshot = await getDocs(q)
    const [ subRequest ] = querySnapshot.docs
    return subRequest
  }

  const submitRSVP = async (subRequestId, formValues)=> {
    formValues.pending = true
    const subRequestDoc = doc(firestore, "subRequests", subRequestId)
    await updateDoc(subRequestDoc, {
      rsvp: formValues
    })
  }

  const confirmRSVP = async (subRequestId, rsvpInfo) => {
    const subRequestDoc = doc(firestore, "subRequests", subRequestId)
    await updateDoc(subRequestDoc, {
      rsvp: { ...rsvpInfo, pending: false},
    })
  }

  return { createSubRequest, fetchSubRequest, submitRSVP, confirmRSVP }
}