import "./BrandCarousel.css";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import { imgData } from "./imgData";

const BrandCarousel = () => {

    const slideLeft = ()=>{
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 400;
    }

    const slideRight = ()=>{
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 400;
    }
  return (
    <div className="logoWrapper">
        <MdChevronLeft className="chevron" onClick={slideLeft} size={40}/>
      <div id="slider" className="carosonal">
        {imgData.map((image) => (
          <img
            className="brandLogo"
            key={image.id}
            src={image.img}
            alt={`image${image.id}`}
          />
        ))}
      </div>
      <MdChevronRight className="chevron" onClick={slideRight} size={40}/>
    </div>
  );
};

export default BrandCarousel;
