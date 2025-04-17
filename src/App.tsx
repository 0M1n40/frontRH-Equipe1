
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'


import Home from './pages/home/Home';



function App() {
  return (
    <>

        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Home />} />
              <Route path="/produtos" element={<Home />} />
            </Routes>
          </div>
          
        </BrowserRouter>

      <Home />

    </>
  )
}

export default App

export default App;

