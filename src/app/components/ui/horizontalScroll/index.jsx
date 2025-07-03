"use client";

const HorizontalScroll = ({ children }) => {
  return (
    <div className="flex gap-12 overflow-x-auto px-16 pb-8 flex-nowrap scrollbar-hide">
      {children}
    </div>
  );
};

export default HorizontalScroll;
