import { backendUrl } from '../../../utils'

export const getApplicantApi = async (id) => {
  try {
    const response = await fetch(`${backendUrl}/applicants/${id}`)

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
