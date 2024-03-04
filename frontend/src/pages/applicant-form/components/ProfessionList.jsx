import { useState } from 'react'
import { useFieldArray } from 'react-hook-form'
import { Badge } from '../../../components'

export function ProfessionList (props) {
  const { professions, setProfessions, control } = props
  const [list, setList] = useState([])

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'professions'
  })

  const handleRemove = (profession) => {
    const index = fields.findIndex(field => field.originalId === profession.originalId)
    remove(index)
    setList(list.filter(item => item.id !== profession.id))
  }

  const handleAdd = (profession) => {
    const searchedProfession = fields.find(field => field.originalId === profession.id)

    if (!searchedProfession) {
      append({ ...profession, originalId: profession.id })
      setList([...list, profession])
      const filteredProfessions = professions.filter(p => p.id !== profession.id)
      setProfessions(filteredProfessions)
    }
  }

  return (
    <div className='mt-4'>
      {
        professions
          .filter(profession => {
            const { id } = profession

            const ids = list.map(item => item.id)

            return !ids.includes(id)
          })
          .concat(list)
          .map(profession => {
            const { id, name } = profession

            if (list.find(item => item.id === id)) {
              return (
                <div key={id} className='mb-2 inline-block'>
                  <Badge text={name}>
                    <button
                      key={id}
                      type='button' className='inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300' data-dismiss-target='#badge-dismiss-default' aria-label='Remove'
                      onClick={() => handleRemove(profession)}
                    >
                      <svg className='w-2 h-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
                        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
                      </svg>
                    </button>
                  </Badge>
                </div>
              )
            } else {
              return (
                <div key={id} className='mb-2 inline-block'>
                  <Badge text={name}>
                    <button
                      type='button' className='inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300' data-dismiss-target='#badge-dismiss-default' aria-label='Remove'
                      onClick={() => handleAdd(profession)}
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' className='w-4 h-4'>
                        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                      </svg>
                    </button>

                  </Badge>
                </div>
              )
            }
          })
      }
    </div>
  )
}
