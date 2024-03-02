import { Route, Routes } from 'react-router-dom'
import Header from './pages/header/Header.jsx'
import Home from "./pages/home/Home.jsx"
import ApplicantList from './pages/applicants-list/applicant-list.jsx'
import Footer from './pages/footer/Footer.jsx'
import Applicant from './pages/applicant/applicant.jsx'

function App(){
  return(
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/applicantList' element={<ApplicantList />} />
          <Route path='/applicant' element={<Applicant/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
