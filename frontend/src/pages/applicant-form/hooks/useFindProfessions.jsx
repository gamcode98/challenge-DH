import { useState } from 'react'
import { findProfessionsByName } from '../services'

export function useFindProfessions () {
  const [professions, setProfessions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const findProfessions = async (query) => {
    setIsLoading(true)
    try {
      const { data } = await findProfessionsByName(query)
      setProfessions(data.length === 0 ? undefined : data)
    } catch (error) {
      console.error('Error: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    professions,
    findProfessions,
    setProfessions,
    isLoading
  }
}
