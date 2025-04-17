import { CloseIcon } from '../../utils/icons';

type ModalProps = {
  onClose: () => void;
  member: {
    name: string;
    photo: string;
    description: string;
  };
};

function Modal({ onClose, member }: ModalProps) {
  if (!member) return null;

  return (
    <div role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/25" aria-hidden="true"></div>

      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
          <div className="relative rounded-lg bg-white shadow-xl sm:w-full sm:max-w-2xl h-[400px] flex animate-fade-in">
            
            <button
              onClick={onClose}
              className="absolute top-3 right-3 rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset"
            >
              <CloseIcon />
            </button>

            <div className="w-1/2 h-full bg-gray-100">
              <img
                src={member.photo}
                alt={member.name}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2" id="modal-title">
                {member.name}
              </h3>
              <p className="text-sm text-gray-700">{member.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;