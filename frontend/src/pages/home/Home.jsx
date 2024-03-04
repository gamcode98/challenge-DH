import { SearchInput } from '../../components/SearchInput'
import { useFindApplicants } from '../applicants-list/hooks/useFindApplicants'

function Home () {
  const {
    findApplicantsByQuery
  } = useFindApplicants({ isNavigating: true })

  return (
    <section className='img-background flex flex-col items-center justify-center h-screen'>
      <h2 className='text-6xl font-bold mb-4'>RECRUITING</h2>
      <p className='text-sm italic mb-4'>Donde se encuentran los mejores postulantes</p>
      <div className='w-2/3'>
        <SearchInput onSearch={findApplicantsByQuery} buttonText='Busca por nombre' />
      </div>
    </section>
  )
}

export default Home
