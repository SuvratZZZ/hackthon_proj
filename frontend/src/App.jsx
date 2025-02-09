import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Cnc from './pages/cnc'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cnc' element={<Cnc/>}/>
          {/* <Route path='/participant' element={<Participant/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
