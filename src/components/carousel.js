import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? items.length - 1 : newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === items.length ? 0 : newIndex);
  };

  const { image, title, desc } = items[currentIndex];

  return (

    <div className="flex-column justify-center h-[80vh] relative ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 duration-500 ">
        <img className="flex mx-auto rounded-2xl" src={image} alt={title} />
        <div className="md:m-5 p-2 xs:overflow-y-scroll">

          <h2>{title}</h2>
          <p className="text-xl">{desc}</p>
        </div>
      </div>


      <div className="flex justify-center relative bottom-0 left-0">

        <button
          className="bg-cDarkGrey rounded-full text-white px-2 m-2"
          onClick={handlePreviousClick}
        >
          <i className="text-lg fa-solid fa-caret-left"></i>
        </button>
        <button
          className="bg-cDarkGrey rounded-full text-white px-2 m-2"
          onClick={handleNextClick}
        >
          <i className="text-lg fa-solid fa-caret-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
