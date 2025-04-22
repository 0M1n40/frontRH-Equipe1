import { Link } from "react-router-dom";
import { CloseIcon } from "../../utils/icons";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

type ModalProps = {
  onClose: () => void;
  member: {
    name: string;
    photo: string;
    description: string;
    github: string;
    linkedin: string;
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
              <h3
                className="text-lg font-bold text-gray-900 mb-2"
                id="modal-title"
              >
                {member.name}
              </h3>
              <p className="text-sm font-medium text-gray-700">{member.description}</p>

              <div className="w-1/1 p-3 flex justify-center">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <GithubLogo size={48} weight="duotone" color="#4F46E5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <LinkedinLogo size={48} weight="duotone" color="#4F46E5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
