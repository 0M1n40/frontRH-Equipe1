
import './Home.css';
import ProjetoIntegradorSlide from '../../utils/img/ProjetoIntegradorSlide.png';

function Home() {
    return (
        <>
            <div className="home-background flex justify-center items-center min-h-screen px-0"> 
                <div className="w-[90vw] flex justify-center">
                    <img
                        src={ProjetoIntegradorSlide}
                        alt="Imagem Página Home"
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>
            </div>
        </>
    )
}

export default Home;


