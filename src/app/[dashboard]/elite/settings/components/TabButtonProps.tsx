interface TabButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-4 px-1 text-sm font-medium border-b-2 focus:outline-none ${
        active
          ? "text-blue-600 border-blue-600"
          : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
      }`}
    >
      {text}
    </button>
  );
};

export default TabButton;
