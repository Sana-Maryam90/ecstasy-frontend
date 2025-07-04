"use client";

import CategoryBox from "@/app/components/product/categoryBox";

const categories = [
  {
    name: "Notebooks",
    img: "/assets/images/JPEGs/notebooks.jpg",
    link: "/notebooks",
    shadowColor: "#A6D1BD",
  },
  {
    name: "Notepads",
    img: "/assets/images/JPEGs/notepad.jpg",
    link: "/notepads",
    shadowColor: "#DFBACD",
  },
  {
    name: "Sketchbooks",
    img: "/assets/images/JPEGs/sketch.jpg",
    link: "/sketchbooks",
    shadowColor: "#EE8794",
  },
];

const AllCategoriesPage = () => {
  return (
    <main className="bg-[#F9F4EF] min-h-screen px-6 sm:px-12 py-12 font-poppins">
      <h1 className="text-3xl sm:text-4xl font-orelega text-center mb-10">
        This is a details Pageeeee
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {categories.map((category, index) => (
          <CategoryBox
            key={index}
            Img={category.img}
            txt={category.name}
            link={category.link}
            shadowColor={category.shadowColor}
          />
        ))}
      </div>
    </main>
  );
};

export default AllCategoriesPage;
