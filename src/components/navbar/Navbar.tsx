import { Link } from "react-router-dom";
import logo from '../../utils/img/logo.png';


function Navbar() {
  return (
    <div>
    <nav className="w-full flex justify-between items-center p-4 bg-white shadow-md"> 
        <div className="flex items-center gap-2">
        <img src={logo} alt="Logo RH Conect" className="h-10 w-auto" />
          {/* <span className="text-2xl font-bold text-gray-800">Rh Conect</span> */}
        </div>

        <div className="flex gap-6 text-black font-medium">
        <div className="hover:text-black cursor-pointer">
            <Link to="/" className="hover:underline">Home</Link>
        </div>
        <div className="hover:text-black cursor-pointer">
            <Link to="/sobre" className="hover:underline">Sobre Nós</Link>
        </div>
        <div className="hover:text-black cursor-pointer">
            <Link to="/produtos" className="hover:underline">Produtos</Link>
        </div>
        </div>
    </nav>
    </div>
);
}

export default Navbar;
