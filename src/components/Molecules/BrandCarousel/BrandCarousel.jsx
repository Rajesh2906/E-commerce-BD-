import "./BrandCarousel.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { imgData } from "./imgData";
import { useState, useRef } from "react";

const VISIBLE_COUNT = 3; // Number of images to show at once

const BrandCarousel = () => {
  const [startIdx, setStartIdx] = useState(0);
  const carosonalRef = useRef(null);

  const slideLeft = () => {
    setStartIdx((prev) => (prev - 1 + imgData.length) % imgData.length);
  };

  const slideRight = () => {
    setStartIdx((prev) => (prev + 1) % imgData.length);
  };

  // Infinite scroll handler
  const handleScroll = () => {
    const el = carosonalRef.current;
    if (!el) return;

    // If scrolled to the left end
    if (el.scrollLeft === 0) {
      slideLeft();
      el.scrollLeft = el.scrollWidth / 2; // Reset scroll position
    }
    // If scrolled to the right end
    else if (el.scrollLeft + el.offsetWidth >= el.scrollWidth) {
      slideRight();
      el.scrollLeft = el.scrollWidth / 2; // Reset scroll position
    }
  };

  // Get the images to display, wrapping around the array
  const visibleImages = Array.from({ length: VISIBLE_COUNT }, (_, i) => {
    const idx = (startIdx + i) % imgData.length;
    return imgData[idx];
  });

  return (
    <div className="logoWrapper">
      <MdChevronLeft className="chevron" onClick={slideLeft} size={40} />
      <div
        className="carosonal"
        ref={carosonalRef}
        onScroll={handleScroll}
        style={{ overflowX: "auto", display: "flex" }}
      >
        {visibleImages.map((image) => (
          <img
            className="brandLogo"
            key={image.id}
            src={image.img}
            alt={`image${image.id}`}
          />
        ))}
      </div>
      <MdChevronRight className="chevron" onClick={slideRight} size={40} />
    </div>
  );
};

export default BrandCarousel;