import { useController } from 'react-hook-form'

export const TextField = (props) => {
  const { labelId, labelText, typeOfInput, placeholder } = props

  const { field, fieldState } = useController(props)

  return (
    <div className='mb-2'>

      <label
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        htmlFor={labelId}
      >{labelText}
      </label>

      <input
        {...field}
        id={labelId}
        type={typeOfInput}
        placeholder={placeholder}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
        ${fieldState.invalid && 'border-red-500'}`}
      />

      {fieldState.invalid && <p className='text-red-500 mt-2 text-sm'>{fieldState.error?.message}</p>}

    </div>
  )
}
