import { createContext, useState } from 'react'

export const ApplicantsContext = createContext({
  applicants: [],
  setApplicants: () => {}
})

export const ApplicantProvider = ({ children }) => {
  const [applicants, setApplicants] = useState([])

  const value = { applicants, setApplicants }

  return <ApplicantsContext.Provider value={value}>{children}</ApplicantsContext.Provider>
}
