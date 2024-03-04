import { useEffect, useState } from 'react'
import { getApplicantsApi } from '../services'

export function useApplicants () {
  const [applicants, setApplicants] = useState([])
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
    getApplicants()
  }, [])

  return {
    applicants,
    isLoading,
    setApplicants
  }
}
