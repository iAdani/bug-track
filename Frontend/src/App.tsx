import { Route, Routes } from 'react-router-dom'
import './App.css'
import TestPage from './pages/TestPage'

function App() {

  return (
    <>
      <div className='flex flex-col items-center h-screen justify-center bg-neutral-950 text-white'>
        <Routes>
          <Route path='/' element={<TestPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
