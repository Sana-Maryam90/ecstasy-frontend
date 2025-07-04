import Button from "../../ui/button";
import Link from "next/link";

const CategoryBox = ({ Img, txt, link, shadowColor }) => {
  return (
    <div
      className="relative h-[240px] w-[240px] bg-cover rounded-[20px] text-center z-10 transition-all group"
      style={{
        backgroundImage: `url(${Img})`,
        boxShadow: `12px 12px 0px 0px ${shadowColor}`,
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-[-1] rounded-[20px] group-hover:bg-transparent transition-all" />
      <p className="text-white text-[2.4em] font-orelega pt-[40%] group-hover:invisible m-0">
        {txt}
      </p>
      <div className="absolute bottom-5 w-full hidden group-hover:flex justify-center">
        <Link href={`/products/${link}`}>
          <Button
            txt="Browse"
            className="w-[160px] h-[40px] text-[1.1em] rounded-[20px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryBox;
