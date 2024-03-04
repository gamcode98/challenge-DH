import { useEffect, useState } from 'react'
import { getApplicantsApi } from '../services'
import { useApplicants } from '../../../../hooks/useApplicants'

export function useApplicantList () {
  const { applicants, setApplicants } = useApplicants()
  const [isLoading, setIsLoading] = useState(false)

  const getApplicants = async () => {
    setIsLoading(true)
    try {
      const { data } = await getApplicantsApi()

      setApplicants(data)
    } catch (error) {
      console.error('Error: ', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (applicants.length === 0) {
      getApplicants()
    }
  }, [])

  return {
    applicants,
    isLoading,
    setApplicants
  }
}
