import { useParams } from 'react-router-dom'
import { formatDateString } from '../../utils'
import { useApplicant } from './hooks'

function Applicant () {
  const { id } = useParams()
  const { applicant, isLoading } = useApplicant(id)

  if (isLoading) {
    return <p>Cargando...</p>
  }

  return (
    <div>
      <div className='relative'>
        <img src='/img/trama.png' className='cuadro-applicant w-[95%] mx-auto' />
        <img src={applicant?.image} className='w-40 h-40 absolute bottom-[-100px] left-1/2 transform -translate-x-1/2' />
      </div>
      <h2 className='name-applicant font-bold'>{applicant?.firstName} {applicant?.lastName}</h2>

      <div className='flex justify-center mt-2'>
        {applicant?.Professions.map((profession) => (
          <span key={profession.id} className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>{profession.name}
          </span>
        ))}
      </div>

      <div className='flow-root w-11/12 lg:w-8/12 lg:mx-auto rounded-lg border border-gray-100 py-3 shadow-sm mt-10 mb-40'>
        <dl className='-my-3 divide-y divide-gray-100 text-sm'>
          <div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
            <dt className='font-medium text-gray-900'>DNI</dt>
            <dt className='font-medium text-gray-900'>{applicant?.dni}</dt>
          </div>

          <div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
            <dt className='font-medium text-gray-900'>E-mail</dt>
            <dd className='text-gray-700 sm:col-span-2'>
              {applicant?.email}
            </dd>
          </div>

          <div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
            <dt className='font-medium text-gray-900'>Número de celular</dt>
            <dd className='text-gray-700 sm:col-span-2'>{applicant?.cellphone}</dd>
          </div>

          <div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
            <dt className='font-medium text-gray-900'>Género</dt>
            <dd className='text-gray-700 sm:col-span-2'>{applicant?.gender}</dd>
          </div>

          <div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
            <dt className='font-medium text-gray-900'>Fecha de nacimiento</dt>
            <dd className='text-gray-700 sm:col-span-2'>{formatDateString(applicant?.birthdate)}</dd>
          </div>

          <div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
            <dt className='font-medium text-gray-900 flex flex-row gap-2'>
              <img src='/img/linkedin.png' alt='linkedin' width={20} />
              <span>
                LinkedIn
              </span>
            </dt>
            <dd className='text-gray-700 sm:col-span-2'>
              <a href={`${applicant?.linkedinUrl}`} target='_blank' rel='noreferrer'>{applicant?.linkedinUrl}</a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Applicant
