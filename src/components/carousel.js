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
    <div className="block justify-center">
      <div className="flex flex-row h-[50vh]  duration-500 	">
        <img className="flex rounded-2xl" src={image} alt={title} />
        <div className="m-5 p-2 ">
          <h2>{title}</h2>
          <p className="text-xl">{desc}</p>
        </div>
      </div>

      <div className="flex justify-center">
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
