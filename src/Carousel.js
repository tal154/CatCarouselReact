import { useState } from "react";
import data from "./data.json";

export default function Carousel() {
  // 2. TODO: Create state for the image index to display

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? data.length - 1 : newIndex);
  };

  const handleRight = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= data.length ? 0 : newIndex);
  };

  // 3. TODO: Create click handlers for the buttons to decrement and increment
  // the index for the left and right buttons, respectively

  // 3. TODO: If the left button gets to the first image, go back to the last image

  // 4. TODO: If the right button gets to the last image, go back to the first image
  return (
    <div className="carousel-container">
      <button
        className="carousel-btn carousel-btn--left"
        onClick={handleLeft}
        aria-controls="carousel"
        aria-label="previous"
      >
        &lt;
      </button>
      <div className="carousel-img-container">
        <img
          src={data[currentIndex].url}
          alt={data[currentIndex].description}
        />
      </div>
      <button
        className="carousel-btn carousel-btn--right"
        onClick={handleRight}
        aria-controls="carousel"
        aria-label="next"
      >
        &gt;
      </button>
    </div>
  );
}
