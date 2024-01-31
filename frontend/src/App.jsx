import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <Routes>
      <Route path='/' element={<div className='underline'>Home</div>} />
    </Routes>
  )
}

export default App
