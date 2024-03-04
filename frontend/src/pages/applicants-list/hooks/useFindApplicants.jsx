import { useState } from 'react'
import { findApplicantsByFirstNameApi } from '../services'
import { useApplicants } from '../../../../hooks/useApplicants'
import { useNavigate } from 'react-router-dom'

export function useFindApplicants ({ isNavigating = false }) {
  console.log(isNavigating)
  const { setApplicants } = useApplicants()
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const findApplicantsByQuery = async (firstName) => {
    setIsLoading(true)
    try {
      const { data } = await findApplicantsByFirstNameApi(firstName)
      setApplicants(data)
      if (isNavigating) {
        navigate('/applicants')
      }
    } catch (error) {
      console.error('Error: ', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    findApplicantsByQuery
  }
}
