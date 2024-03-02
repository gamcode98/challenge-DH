import { useState } from 'react'
import { createApplicantApi } from '../services'

export const useApplicant = () => {
  const [isLoading, setIsLoading] = useState(false)

  const createApplicant = async (body) => {
    setIsLoading(true)
    try {
      const response = await createApplicantApi(body)
      console.log('Response: ', response)
      return response
    } catch (error) {
      console.error('Error: ', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    createApplicant
  }
}
