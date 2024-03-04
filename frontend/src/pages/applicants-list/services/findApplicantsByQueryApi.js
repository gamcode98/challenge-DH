import { backendUrl } from '../../../utils'

export const findApplicantsByFirstNameApi = async (firstName) => {
  try {
    const response = await fetch(`${backendUrl}/applicants/find?applicant=${firstName}`)

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
