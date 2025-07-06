import React from "react";

const TherapyQuoteSection: React.FC = () => {
  return (
    <section className="bg-[#f7f4ef] px-6 py-20 text-center border-y border-gray-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-[42px]  leading-relaxed mb-8 font-serif-garamond text-[#3d3d3d]">
          Therapy can be a space where you invest in yourself—
          <br className="hidden sm:block" />
          one of the highest forms of self-care.
        </h2>

        <p className="font-extralight text-[15px] sm:text-[18px] leading-relaxed text-gray-700 font-inter max-w-md sm:max-w-3xl mx-auto px-4 sm:px-0">
          You may be led to therapy by anxiety, depression, relationship stress,
          past or recent trauma, grief and loss, self-esteem issues, or
          challenges with family, parenting, or parental relationships.
          Whatever the source of your stress, you don’t have to face it alone.
          Therapy offers you the time and space to work toward wellness and
          peace.
        </p>

      </div>
    </section>
  );
};

export default TherapyQuoteSection;
