const Button = ({ txt, className = "", ...rest }) => {
  return (
    <button
      className={`bg-purpleLight text-orange font-poppins border-none shadow-[5px_4px_0px_1px_#FFBBCB] rounded-full transition-all duration-100 cursor-pointer hover:shadow-none ${className}`}
      {...rest}
    >
      {txt}
    </button>
  );
};

export default Button;
