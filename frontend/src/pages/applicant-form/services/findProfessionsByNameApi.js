import { backendUrl } from '../../../utils'

export const findProfessionsByName = async (name) => {
  try {
    const response = await fetch(`${backendUrl}/professions/find?profession=${name}`)

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
