const Input = ({ type = "text", placeholder, className = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full border border-[#FF5E43] bg-transparent text-[#FF5E43] placeholder-[#FF5E43] font-poppins px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5E43] transition ${className}`}
      {...props}
    />
  );
};

export default Input;
