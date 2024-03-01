import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '../../components/TextField'
import Datepicker from 'flowbite-datepicker/Datepicker'
import '../header/css/header.css'
import * as yup from 'yup'
import { useEffect } from 'react'

const schema = yup.object({
  firstName: yup.string().required('El nombre es requerido'),
  lastName: yup.string().required('El apellido es requerido'),
  email: yup.string().email('Ingresa un correo valido').required('El correo es requerido'),
  cellphone: yup.string().required('El celular es requerido')
    .matches(/^[0-9]+$/, 'Ingresa solo numeros'),
  image: yup.string().required('La imagen es requerida')
}).required()

function ApplicantForm () {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const dobHandler = (e) => {
    console.log(e.target.value)
  }
  useEffect(() => {
    const datepickerEl = document?.getElementById('datepickerId')
    // console.log(datepickerEl);
    if (datepickerEl) {
      const datePickerInstance = new Datepicker(datepickerEl, {})

      return () => {
        // Cleanup: Destroy the Datepicker instance
        datePickerInstance.destroy()
      }
    }
  }, [])

  const onSubmit = data => {
    console.log({ data })
  }

  return (
    <div className='mt-20 w-11/12 mx-auto'>
      <h2 className='text-3xl mb-4'>¡Bienvenido a Recruiting!</h2>
      <h3 className='text-xl'>Por favor, complete los siguientes datos</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          control={control}
          name='firstName'
          rules={{ required: true }}
          labelId='firstName'
          typeOfInput='text'
          placeholder='Ingresa el nombre'
          labelText='Nombre'
        />
        <TextField
          control={control}
          name='lastName'
          rules={{ required: true }}
          labelId='lastName'
          typeOfInput='text'
          placeholder='Ingresa el apellido'
          labelText='Apellido'
        />
        <TextField
          control={control}
          name='email'
          rules={{ required: true }}
          labelId='email'
          typeOfInput='text'
          placeholder='Ingresa el correo electrónico'
          labelText='Correo electrónico'
        />

        <div>
          <label htmlFor='datepickerId' className='block mb-2 text-sm font-medium text-gray-900'>Fecha de nacimiento</label>
          <div className='relative mb-4'>
            <input
              datepicker
              datepicker-autohide
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Seleccione la fecha de nacimiento'
              onSelect={(e) => console.log(e.target.value)}
              id='datepickerId'
            />
            <div className='flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none'>
              <svg
                aria-hidden='true'
                class='w-5 h-5 text-gray-500 dark:text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
          </div>
        </div>

        <button className='border rounded p-2'>Enviar</button>
      </form>
    </div>
  )
}

export default ApplicantForm
