const Footer = () => {
  return (
    <footer className="bg-[#FFBBCB] text-[#FF5E43] h-[300px] flex flex-col justify-between items-center py-6 px-8 font-poppins">
      <section className="w-full flex justify-around items-center h-[90%]">
        <div className="text-5xl font-grandstander pt-4">Ecstasy.</div>

        <div className="flex flex-col">
          <a>Instagram</a>
          <a>Pinterest</a>
          <a>Facebook</a>
        </div>

        <div className="flex flex-col">
          <a>Search</a>
          <a>Home</a>
          <a>About</a>
          <a>FAQs</a>
          <a>Contact Us</a>
        </div>

        <form className="grid grid-cols-2 gap-2 pt-8">
          <input
            type="text"
            placeholder="First Name"
            className="w-[130px] h-[25px] border border-[#FF5E43] outline-none font-poppins px-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[130px] h-[25px] border border-[#FF5E43] outline-none font-poppins px-2"
          />
          <input
            type="submit"
            value="Sign Up!"
            className="col-span-2 bg-transparent text-white text-[1.1em] cursor-pointer border-none"
          />
        </form>
      </section>
      <div className="text-sm font-light text-center">Copyright 2023 | Ecstasy</div>
    </footer>
  );
};

export default Footer;
