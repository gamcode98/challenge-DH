import { Route, Routes } from 'react-router-dom'
import Header from './pages/header/Header.jsx'
import Home from './pages/home/Home.jsx'
import ApplicantList from './pages/applicants-list/applicant.jsx'
import Footer from './pages/footer/Footer.jsx'
import Applicant from './pages/applicant/applicant.jsx'
import ApplicantForm from './pages/applicant-form/ApplicantForm.jsx'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/' element={<ApplicantForm />} />
        {/* <Footer /> */}
      </Route>
    </Routes>
  )
}

export default App
