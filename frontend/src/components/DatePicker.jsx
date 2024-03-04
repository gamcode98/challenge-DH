import { useEffect } from 'react'
import { useController } from 'react-hook-form'
import Datepicker from 'flowbite-datepicker/Datepicker'

export function DatePicker (props) {
  const { forId, labelText, placeholder } = props

  const { field, fieldState } = useController(props)

  useEffect(() => {
    const datepickerEl = document?.getElementById(forId)
    if (datepickerEl) {
      const datePickerInstance = new Datepicker(datepickerEl, {
        format: 'dd/mm/yyyy'
      })

      return () => {
        datePickerInstance.destroy()
      }
    }
  }, [])

  return (
    <div>
      <label
        htmlFor={forId}
        className='block mb-2 text-sm font-medium text-gray-900'
      >{labelText}
      </label>
      <div className='relative mb-2'>
        <input
          datepicker='true'
          type='text'
          className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          placeholder={placeholder}
          onSelect={(e) => field.onChange(e.target.value)}
          id={forId}

        />
        <div className='flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-gray-500 dark:text-gray-400'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
      {fieldState.invalid && <p className='text-red-500 text-sm'>{fieldState.error?.message}</p>}
    </div>
  )
}
