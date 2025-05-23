interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/25" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg p-6 w-full max-w-md">
        {children}
      </div>
    </div>
  );
};
