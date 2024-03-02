import { useState } from 'react'
import { createApplicantApi } from '../services'
import { HTTP_STATUS_CODE } from '../../../utils'

export const useApplicant = ({ handleShowAlert }) => {
  const [isLoading, setIsLoading] = useState(false)

  const createApplicant = async (body) => {
    setIsLoading(true)
    try {
      const { meta: { message, statusCode } } = await createApplicantApi(body)

      if (statusCode === HTTP_STATUS_CODE.CREATED) {
        handleShowAlert(message, 'success')
      } else {
        handleShowAlert(message, 'error')
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
    createApplicant
  }
}
