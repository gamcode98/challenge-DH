import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { findApplicantsByFirstNameApi } from '../services'
import { useApplicants } from '../../../../hooks/useApplicants'

export function useFindApplicants ({ isNavigating = false }) {
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
