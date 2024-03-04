
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ApplicantList () {
  const [applicants, setApplicants] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/applicants')
      .then((response) => response.json())
      .then((data) => setApplicants(data))
      .catch((error) => console.log(error))
  }, [])

  const goToApplicant = (id) => {
    navigate(`/applicant/${id}`)
  }

  return (
    <div className='mt-20 flex flex-col items-center mb-24'>
      <form action='#' method='get' className='mb-8 w-[50%]'>
        <input
          type='text'
          placeholder='Buscar...'
          className='w-full p-2 border border-gray-300 rounded'
        />
      </form>
      <div className='w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {applicants.data?.map((applicant) => (
          <div key={applicant.id} className='p-4 bg-gray-200 rounded items-center'>
            <div className='group'>
              <button onClick={() => goToApplicant(applicant.id)} className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                <img
                  src={applicant.image}
                  className='h-full w-full object-cover object-center group-hover:opacity-75'
                />
              </button>
              <h3 className='font-bold mt-2 flex items-center justify-center'>
                {applicant.firstName} {applicant.lastName}
              </h3>
              {applicant.Professions.map((profession) => (
                <p
                  key={profession.id}
                  className='text-sm italic flex items-center justify-center'
                >
                  {profession.name}
                </p>
              ))}
              <div className='flex justify-center mt-6'>
                <button
                  class='flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200'
                  type='button'
                  aria-label='Like'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                    />
                  </svg>
                </button>
                <button
                  class='flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200'
                  type='button'
                  aria-label='Like'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ApplicantList
