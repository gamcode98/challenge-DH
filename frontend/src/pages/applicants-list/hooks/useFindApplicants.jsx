import { useState } from 'react'
import { findApplicantsByFirstNameApi } from '../services'

export function useFindApplicants ({ handleApplicants }) {
  const [isLoading, setIsLoading] = useState(false)

  const findApplicantsByQuery = async (firstName) => {
    setIsLoading(true)
    try {
      const { data } = await findApplicantsByFirstNameApi(firstName)
      handleApplicants(data)
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
