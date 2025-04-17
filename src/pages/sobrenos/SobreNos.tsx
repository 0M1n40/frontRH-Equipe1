import teamData from "../../data/team.json";
import Membro from '../../components/membro/Membro';
import './SobreNos.css';

function SobreNos() {
  const membrosCima = teamData.slice(0, 4);
  const membrosBaixo = teamData.slice(4, 7);

  return (
    <div className="bg-custom-color min-h-screen w-full p-0">
      <h1 className="text-3xl font-bold text-center py-6">Sobre nós</h1>
      <p className="text-center mb-6">Equipe RHConnect</p>
      
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
      
      <div className="flex justify-center gap-8 flex-wrap">
        {membrosCima.map((member, index) => (
          <Membro key={index} membro={member} />
        ))}

      </div>

      <div className="flex justify-center gap-8 flex-wrap mt-8">
        {membrosBaixo.map((member, index) => (
          <Membro key={index} membro={member} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default SobreNos;
