import MembroDoTime from "../../models/Membro";

type MembroProps = {
  membro: MembroDoTime,
  onClick: () => void
};

function Membro({ membro, onClick }: MembroProps) {
  return (
    <div className="w-80 text-center cursor-pointer" onClick={onClick}>
      <img
        src={membro.photo}
        alt={membro.name}
        className="w-80 h-80 mx-auto rounded-full object-cover mb-2 shadow-lg"
      />
      <h2 className="text-lg font-semibold">{membro.name}</h2>
    </div>
  );
}


export default Membro;
