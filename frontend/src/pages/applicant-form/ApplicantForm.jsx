import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { DatePicker, FileField, SelectField, TextField } from '../../components'
import { formatDateString } from '../../utils'
import { useApplicant } from './hooks'
import { genders, schema } from './utils'
import '../header/css/header.css'

function ApplicantForm () {
  const { createApplicant, isLoading } = useApplicant()

  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      cellphone: '',
      dni: '',
      gender: '',
      dob: '',
      image: ''
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const onSubmit = data => {
    const form = new FormData()

    const formattedDate = formatDateString(data.dob)

    Object.entries({
      ...data,
      birthdate: formattedDate
    }).forEach(([key, value]) => {
      form.append(key, value)
    })

    // createApplicant(form)
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

        <TextField
          control={control}
          name='cellphone'
          rules={{ required: true }}
          labelId='cellphone'
          typeOfInput='number'
          placeholder='Ingresa el número de celular'
          labelText='Celular'
        />

        <TextField
          control={control}
          name='dni'
          rules={{ required: true }}
          labelId='dni'
          typeOfInput='number'
          placeholder='Ingresa el número de DNI sin puntos ni espacios'
          labelText='DNI'
        />

        <DatePicker
          control={control}
          name='dob'
          rules={{ required: true }}
          forId='dob'
          labelText='Fecha de nacimiento'
          placeholder='Ingresa la fecha de nacimiento'
        />

        <SelectField
          control={control}
          rules={{ required: true }}
          forId='gender'
          name='gender'
          defaultValue='Elige el género'
          label='Selecciona una opción'
          items={genders}
        />

        <FileField
          control={control}
          name='image'
          rules={{ required: true }}
          forId='image'
          labelText='Sube una imagen'
        />

        <button
          type='submit'
          className='border rounded p-2'
          disabled={isLoading}
        >
          {
            isLoading
              ? 'Cargando...'
              : 'Enviar'
          }
        </button>

      </form>
    </div>
  )
}

export default ApplicantForm
