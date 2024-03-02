import { useController } from 'react-hook-form'

export function FileField (props) {
  const { forId, labelText } = props

  const { field, fieldState } = useController(props)

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const upload = (file) => {
    console.log('file', file)
    field.onChange(file)
    // const formData = new FormData()

    // if (file !== undefined) {
    //   formData.append('image', file)
    // }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const file = Array.from(e.dataTransfer.files)[0]
    upload(file)
  }

  const handleChange = (e) => {
    const file = e.target.files?.[0]
    upload(file)
  }

  return (
    <div>
      <label htmlFor={forId} className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>{labelText}</label>
      <div
        className='flex items-center justify-center w-full'
        draggable
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
      >
        <label htmlFor={forId} className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <svg className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 16'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2' />
            </svg>
            {
              field.value
                ? (
                  <>
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>Cargado</p>
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>{field.value.name}</p>
                  </>
                  )
                : (
                  <>
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'><span className='font-semibold'>Click para cargar</span> o arrastra y suelta</p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG </p>
                  </>
                  )
            }
          </div>
          <input
            id={forId}
            type='file'
            className='hidden'
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>

      {fieldState.invalid && <p className='text-red-500 text-sm mt-2'>{fieldState.error?.message}</p>}
    </div>
  )
}
