import { backendUrl } from '../../../utils'

export const getApplicantsApi = async () => {
  try {
    const response = await fetch(`${backendUrl}/applicants`)

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
