import { Route, Routes } from 'react-router-dom'
import Header from './pages/header/Header'
import Home from './pages/home/Home'
import Footer from './pages/footer/Footer'
import Applicant from './pages/applicant/applicant'
import ApplicantList from './pages/applicants-list/ApplicantList'
import ApplicantForm from './pages/applicant-form/ApplicantForm'

function App () {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/applicants' element={<ApplicantList />} />
        <Route path='/applicant' element={<Applicant />} />
        <Route path='/create-applicant' element={<ApplicantForm />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
