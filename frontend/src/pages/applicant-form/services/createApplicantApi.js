import { backendUrl } from '../../../utils'

export const createApplicantApi = async (body) => {
  try {
    const response = await fetch(`${backendUrl}/applicants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(body)
    })

    return response
  } catch (error) {
    console.error('Error: ', error)
    throw error
  }
}
