import ProjetoIntegradorSlide from '../../utils/img/ProjetoIntegradorSlide.png';

// //width="800px" 

// function Home() {
//     return (
//         <>
//             <div className="bg-red-200 flex justify-center"> 
//                 <div className='container grid grid-cols-2 text-white'>
//                     <div className="flex flex-col gap-4 items-center justify-center py-4">

//                         <div className="flex justify-around gap-4">
//                             <div className='rounded text-white 
//                                             border-white border-solid border-2 py-2 px-4'>      
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex justify-center ">
//                         <img
//                             src={ProjetoIntegradorSlide}
//                             alt="Imagem Página Home"
//                             className='w-1/2'
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home



// function Home() {
//     return (
//         <>
//             <div className="bg-rose-300 flex justify-center items-center min-h-screen"> 
//                 <div className="container flex flex-col items-center justify-center py-8">
                    
//                     {/* Espaço reservado para outros elementos, caso precise */}
//                     <div className="mb-8 text-white">
//                         {/* Aqui você pode colocar título, botão, etc */}
//                     </div>

//                     {/* Imagem centralizada e com largura ajustada */}
//                     <div className="flex justify-center">
//                         <img
//                             src={ProjetoIntegradorSlide}
//                             alt="Imagem Página Home"
//                             className="w-[800px] max-w-full"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home;



function Home() {
    return (
        <>
            <div className="bg-rose-200 flex justify-center items-center min-h-screen px-0"> 
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

