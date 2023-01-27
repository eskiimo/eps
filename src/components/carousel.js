import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  const next = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === images.length ? 0 : newIndex);
  };

  return (
    <div>
      <button onClick={previous}>Previous</button>
      <img src={images[currentIndex]} alt="Carousel Image" />
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Carousel;
