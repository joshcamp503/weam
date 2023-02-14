

export const useHelpers = () => {

  const removePassword = (values) => {
    const listOfEntries = Object.entries(values)
    
    const filterPasswordEntry = (entries) => {
      const filteredArray = entries.filter(entry => {
        return !entry[0].includes('password')
      })
      return filteredArray
    }
    
    const filteredValues = filterPasswordEntry(listOfEntries)
    return Object.fromEntries(filteredValues)
  }

  // const formatPhone = (phoneString) => {
  //   const rawPhoneArray = Array.from(phoneString)
  //   const filteredPhoneArray = rawPhoneArray
  //     .filter((char) => {
  //       const regex = /^[0-9]$/
  //       return char.match(regex)
  //     })
  //   return `+1${filteredPhoneArray.join('')}`
  // }

  const formatValues = (values) => {
    values.date = values.date.toISODate()
    values.time = values.time.toISOTime()
    values.dateTimeISO = values.date + 'T' + values.time
    return values
  }

  return { removePassword, formatValues }
}