import { SearchInput } from '../../components/SearchInput'

export function ProfessionAssignment () {
  return (
    <div className='w-full md:w-1/2 lg:w-2/3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-24 mb-24'>
      <form>
        <SearchInput
          buttonText='Buscar'
          labelText='Buscar por nombre'
          placeholder='Buscar por nombre'
        />
      </form>
    </div>
  )
}
