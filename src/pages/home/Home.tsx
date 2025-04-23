import "./Home.css";
import ProjetoIntegradorSlide from "../../utils/img/ProjetoIntegradorSlide.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-background flex justify-center items-center min-h-screen px-0">
        <div className="w-[90vw] flex flex-col items-center gap-6">
          {/* Imagem */}
          <img
            src={ProjetoIntegradorSlide}
            alt="Imagem Página Home"
            className="w-full h-auto object-cover rounded-xl"
          />

          {/* Botão abaixo da imagem */}
          <div className="botao-nova-postagem">
            <Link to="/sobre" className="text-lg md:text-xl font-bold">
              Contate-nos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
