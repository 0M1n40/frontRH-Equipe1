import MembroDoTime from "../../models/Membro";

type MembroProps = {
  membro: MembroDoTime;
};

function Membro({ membro }: MembroProps) {
  return (
    <div className="w-32 text-center">
      <img
        src={membro.photo}
        alt={membro.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-2"
      />
      <h2 className="text-lg font-semibold">{membro.name}</h2>
    </div>
  );
}

export default Membro;
