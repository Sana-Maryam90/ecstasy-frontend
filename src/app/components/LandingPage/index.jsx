import CategoryBox from "../product/categoryBox";
import ProductCard from "../product/productCard";
import HorizontalScroll from "../ui/horizontalScroll";

const LandingPage = () => {
  return (
    <main className="bg-[#F9F4EF]">
      {/* Category Section */}
      <section className="w-full text-center py-10 sm:py-12">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-orelega px-4 sm:px-8 md:px-20">
          Variety of{" "}
          <span className="relative inline-block bg-[url('/assets/images/svgs/circle.svg')] bg-cover bg-center px-1">
            exciting
          </span>{" "}
          products to choose from.
        </p>

        <div className="flex flex-wrap gap-6 justify-center sm:justify-around max-w-6xl mx-auto mt-10 px-4">
          <CategoryBox
            link="/notebooks"
            Img="/assets/images/JPEGs/notebooks.jpg"
            txt="Notebooks"
            shadowColor="#A6D1BD"
          />
          <CategoryBox
            link="/notepads"
            Img="/assets/images/JPEGs/notepad.jpg"
            txt="Notepads"
            shadowColor="#DFBACD"
          />
          <CategoryBox
            link="/sketchbooks"
            Img="/assets/images/JPEGs/sketch.jpg"
            txt="Sketchbooks"
            shadowColor="#EE8794"
          />
        </div>
      </section>

      {/* Popular Section */}
      <section className="py-10 sm:py-12">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-orelega text-center mb-4">
          <span className="bg-[url('/assets/images/svgs/sparkle.svg')] bg-cover bg-center px-8 py-6 inline-block">
            Popular
          </span>
        </p>

        <HorizontalScroll>
          <ProductCard Img="/assets/images/JPEGs/beigenotebook.jpg" name="Floral Notebook" price="200" />
          <ProductCard Img="/assets/images/JPEGs/sketchbook.jpg" name="Hardpaper Sketchbook" price="300" />
          <ProductCard Img="/assets/images/JPEGs/graybook.jpg" name="Foil Notebook" price="250" />
          <ProductCard Img="/assets/images/JPEGs/diary.jpg" name="Daily Diary" price="220" />
          <ProductCard Img="/assets/images/JPEGs/diary.jpg" name="Daily Diary" price="220" />
          <ProductCard Img="/assets/images/JPEGs/diary.jpg" name="Daily Diary" price="220" />
          <ProductCard Img="/assets/images/JPEGs/diary.jpg" name="Daily Diary" price="220" />
          <ProductCard Img="/assets/images/JPEGs/diary.jpg" name="Daily Diary" price="220" />
        </HorizontalScroll>
      </section>
    </main>
  );
};

export default LandingPage;
