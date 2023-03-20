// REACT
import { useHelpers } from './useHelpers'
// FIREBASE
import { firestore } from '../firebase/config'
import { collection, doc, setDoc } from 'firebase/firestore'

export const useSubRequest = () => {

  const { formatValues } = useHelpers()

  const createSubRequest = async (values) => {
    values.ts = Date.now()
    const formattedValues = formatValues(values)
    const docRef = doc(collection(firestore, 'subRequests'))
    // console.log(formattedValues)
    try {
      await setDoc(docRef, formattedValues)
    }
    catch (err) {
      console.log(err)
    }
  }

  return { createSubRequest }
}