
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import SobreNos from './pages/sobrenos/SobreNos'
import Produtos from './pages/produtos/Produtos'
import Footer from './components/footer/Footer'




function App() {
  return (
    <>

        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route path="/produtos" element={<Produtos />} />
            </Routes>
          </div>
         <Footer/>
        </BrowserRouter>


    </>
  )
}


export default App;

