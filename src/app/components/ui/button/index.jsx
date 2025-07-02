const Button = ({ txt, className = "", ...rest }) => {
  return (
    <button
      className={`bg-[#DFBACD] text-[#FF5E43] font-poppins border-none shadow-[6px_5px_0px_1px_#FFBBCB] transition-all duration-100 cursor-pointer hover:shadow-none ${className}`}
      {...rest}
    >
      {txt}
    </button>
  );
};

export default Button;
