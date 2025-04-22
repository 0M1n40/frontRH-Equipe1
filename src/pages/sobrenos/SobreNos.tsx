import { useState } from "react";
import teamData from "../../data/team.json";
import Membro from "../../components/membro/Membro";
import Modal from "../../components/modal/Modal";
import "./SobreNos.css";

type MembroProps = {
  name: string;
  photo: string;
  description: string;
  github: string;
  linkedin: string;
};

function SobreNos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<MembroProps | null>(null);

  const membrosCima = teamData.slice(0, 4);
  const membrosBaixo = teamData.slice(4, 7);

  const openModal = (member: MembroProps) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-custom-color min-h-screen w-full p-6 ">
      <h1 className="text-3xl font-bold text-center py-6">Sobre nós</h1>
      <p className="text-center mb-06 text-2xl font-medium">Equipe RHConnect</p>

      <div className=" flex flex-col items-center justify-center min-h-[60vh]">
        <div className="flex justify-center gap-9 flex-wrap">
          {membrosCima.map((member, index) => (
            <Membro key={index} membro={member} onClick={() => openModal(member)} />
          ))}
        </div>

        <div className="flex justify-center gap-8 flex-wrap mt-8">
          {membrosBaixo.map((member, index) => (
            <Membro key={index} membro={member} onClick={() => openModal(member)} />
          ))}
        </div>
      </div>

      {isModalOpen && selectedMember && (
        <Modal onClose={closeModal} member={selectedMember} />
      )}
    </div>
  );
}

export default SobreNos;
