import { backendUrl } from '../../../utils'

export const createApplicantApi = async (body) => {
  try {
    const response = await fetch(`${backendUrl}/applicants`, {
      method: 'POST',
      body
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message)
    }

    return data
  } catch (error) {
    console.error('Error: ', error)
    throw error
  }
}
