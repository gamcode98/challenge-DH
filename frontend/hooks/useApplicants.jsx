import { useContext } from 'react'
import { ApplicantsContext } from '../context/ApplicantContext'

export const useApplicants = () => useContext(ApplicantsContext)
