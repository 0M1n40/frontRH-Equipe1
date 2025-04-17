

function Produtos() {
    return (
      <div
        className="flex flex-col gap-4 items-center justify-center py-4 min-h-screen"
        style={{ backgroundColor: "#FABDBD" }}
      >
        <h2 className="text-5xl font-bold">
          <div>Sistema RH Connect</div>
        </h2>
  
        <p className="text-xl text-center max-w-2xl bg-[#FFF5EC]  p-6 rounded-2xl shadow-md">
  <strong>Otimize a gestão do seu time com o RH Connect!</strong><br /><br />
  Este sistema completo foi desenvolvido para transformar a rotina do departamento de Recursos Humanos, oferecendo uma solução prática e eficiente para o controle de colaboradores.
  <br /><br />
  Com o RH Connect, você tem total domínio sobre o cadastro, atualização, consulta e remoção de registros de funcionários — tudo de forma rápida, organizada e intuitiva.
  Ganhe mais agilidade nos processos, minimize erros e tenha sempre as informações à mão para tomar decisões estratégicas com confiança.
</p>

  
        <div className="flex gap-8 flex-wrap justify-center">
          {/* Cadastrar */}
          <div className="flex flex-col items-center gap-2">
            <div className="bg-gray-200 p-4 rounded-full flex items-center justify-center">
              <img
                src="./src/utils/img/cadastrar.png"
                alt="Ícone de cadastro"
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="text-base">Cadastrar</span>
          </div>
  
          {/* Atualizar */}
          <div className="flex flex-col items-center gap-2">
            <div className="bg-gray-200 p-4 rounded-full flex items-center justify-center">
              <img
                src="./src/utils/img/atualizar.png"
                alt="Ícone de atualização"
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="text-base">Atualizar</span>
          </div>
  
          {/* Consultar */}
          <div className="flex flex-col items-center gap-2">
            <div className="bg-gray-200 p-4 rounded-full flex items-center justify-center">
              <img
                src="./src/utils/img/procurar.png"
                alt="Ícone de consulta"
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="text-base">Consultar</span>
          </div>
  
          {/* Remover */}
          <div className="flex flex-col items-center gap-2">
            <div className="bg-gray-200 p-4 rounded-full flex items-center justify-center">
              <img
                src="./src/utils/img/deletar.png"
                alt="Ícone de remoção"
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="text-base">Remover</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default Produtos;