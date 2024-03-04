import { useEffect, useState } from 'react'
import { getApplicantApi } from '../services'

export function useApplicant (id) {
  const [applicant, setApplicant] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const getApplicant = async () => {
    setIsLoading(true)
    try {
      const { data } = await getApplicantApi(id)

      setApplicant(data)
    } catch (error) {
      console.error('Error: ', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getApplicant()
  }, [])

  return {
    applicant,
    isLoading
  }
}
