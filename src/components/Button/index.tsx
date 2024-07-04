type ButtonProps = {
  children: React.ReactNode;
  handleClick?: () => void;
};

const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <button
      className="flex items-center gap-0.5 bg-purple text-white  text-xs p-2 rounded-md font-bold transition-all duration-150 ease-in hover:bg-black"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
