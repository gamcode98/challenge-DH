import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, DatePicker, FileField, SearchInput, SelectField, Spinner, TextField } from '../../components'
import { createDateFromFormat } from '../../utils'
import { useApplicant, useFindProfessions } from './hooks'
import { genders, schema } from './utils'
import { useAlert } from '../../hooks'
import { ProfessionList } from './components/ProfessionList'
import '../header/css/header.css'

function ApplicantForm () {
  const { alert, handleCloseAlert, handleShowAlert } = useAlert()

  const {
    createApplicant,
    isLoading: isLoadingApplicant
  } = useApplicant({ handleShowAlert })

  const {
    findProfessions,
    isLoading: isLoadingProfessions,
    setProfessions,
    professions
  } = useFindProfessions()

  const { handleSubmit, control, getFieldState, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      cellphone: '',
      dni: '',
      gender: '',
      birthdate: '',
      image: '',
      linkedinUrl: '',
      professions: []
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const {
      firstName,
      lastName,
      email,
      cellphone,
      dni,
      gender,
      birthdate,
      image,
      professions,
      linkedinUrl
    } = data

    const formData = new FormData()

    const formattedDate = createDateFromFormat(birthdate)

    Object.entries({
      firstName,
      lastName,
      email,
      cellphone,
      dni,
      gender,
      image,
      linkedinUrl,
      birthdate: formattedDate
    }).forEach(([key, value]) => {
      formData.append(key, value)
    })

    professions.forEach(profession => {
      formData.append('professionsId', profession.id)
    })

    formData.forEach((value, key) => {
      console.log(key, value)
    })

    createApplicant(formData)
  }

  return (
    <div className='w-full md:w-1/2 lg:w-2/3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-24 mb-24'>

      <h2 className='text-3xl mb-4'>¡Bienvenido a Recruiting!</h2>
      <h3 className='text-xl mb-4'>Por favor, complete los siguientes datos</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
      >

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
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

          <TextField
            control={control}
            name='linkedinUrl'
            rules={{ required: true }}
            labelId='linkedinUrl'
            typeOfInput='text'
            placeholder='Ingresa la url de LinkedIn'
            labelText='URL de LinkedIn'
          />

          <DatePicker
            control={control}
            name='birthdate'
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

          <div className='row-span-3'>
            <FileField
              control={control}
              name='image'
              rules={{ required: true }}
              forId='image'
              labelText='Sube una imagen'
            />
          </div>

          <div>
            <SearchInput
              buttonText='Buscar'
              labelText='Busca la/s profesion/es'
              placeholder='Buscar por nombre'
              onSearch={findProfessions}
              isLoading={isLoadingProfessions}
            />
            {
              getFieldState('professions').invalid &&
                <p className='text-red-500 text-sm mt-2'>
                  {errors.professions?.message}
                </p>
            }
            {professions === undefined && <p className='text-sm mt-2'>No se encontraron resultados para tu búsqueda</p>}
            {professions && <ProfessionList professions={professions} control={control} setProfessions={setProfessions} />}
          </div>
        </div>

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center mt-3 w-fit'
          disabled={isLoadingApplicant || isLoadingProfessions}
        >
          {
            isLoadingApplicant
              ? (
                <>
                  <Spinner />
                  Enviando...
                </>
                )
              : 'Guardar'
          }
        </button>

      </form>

      <Alert
        alert={alert}
        handleCloseAlert={handleCloseAlert}
      />
    </div>
  )
}

export default ApplicantForm
