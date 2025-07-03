const Input = ({ type = "text", placeholder, className = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full border border-orange bg-transparent text-orange placeholder-orange font-poppins px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange transition ${className}`}
      {...props}
    />
  );
};

export default Input;
