import CategoryBox from "../product/categoryBox";
import ProductCard from "../product/productCard";

const LandingPage = () => {
  return (
    <main className="bg-[#F9F4EF]">
      {/* Category Section */}
      <section className="w-full text-center py-12">
        <p className="text-[3em] font-orelega px-32">
          Variety of <span className="relative inline-block bg-[url('/assets/images/JPEGs/circle.svg')] bg-cover">exciting</span> products to choose from.
        </p>
        <div className="flex justify-around w-[70%] mx-auto mt-8">
          <CategoryBox link="/notebooks" Img="/assets/images/JPEGs/notebooks.jpg" txt="Notebooks" shadowColor="#A6D1BD" />
          <CategoryBox link="/notepads" Img="/assets/images/JPEGs/notepad.jpg" txt="Notepads" shadowColor="#DFBACD" />
          <CategoryBox link="/sketchbooks" Img="/assets/images/JPEGs/sketch.jpg" txt="Sketchbooks" shadowColor="#EE8794" />
        </div>
      </section>

      {/* Popular Section */}
      <section className="py-12">
        <p className="text-[3em] font-orelega text-center mb-8">
          <span className="bg-[url('/assets/images/svgs/sparkle.svg')] bg-cover px-10 py-10">Popular</span>
        </p>
        <div className="flex gap-12 overflow-auto px-16">
          <ProductCard Img="/assets/images/JPEGs/beigenotebook.jpg" name="Floral Notebook" price="200" />
          <ProductCard Img="/assets/images/JPEGs/sketchbook.jpg" name="Hardpaper Sketchbook" price="300" />
          <ProductCard Img="/assets/images/JPEGs/graybook.jpg" name="Foil Notebook" price="250" />
          <ProductCard Img="/assets/images/JPEGs/diary.jpg" name="Daily Diary" price="220" />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;

