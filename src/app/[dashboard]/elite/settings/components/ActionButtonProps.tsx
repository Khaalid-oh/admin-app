interface ActionButtonProps {
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 flex items-center">
      <span className="mr-2">+</span>
      {text}
    </button>
  );
};

export default ActionButton;
