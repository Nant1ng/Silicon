import { useState } from "react";

import MobileOne from "../../../assets/images/carousel/Mobile-one.svg";
import MobileTwo from "../../../assets/images/carousel/Mobile-two.svg";
import MobileThree from "../../../assets/images/carousel/Mobile-three.svg";

const Images = [MobileOne, MobileTwo, MobileThree];

const SliderContent = [
  {
    title: "My Budget",
    description:
      "Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. ",
  },
  {
    title: "Latest transaction history",
    description:
      "Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. ",
  },
  {
    title: "Transfer",
    description:
      "Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. ",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="slider">
      <div className="slider-content">
        <h1 className="slider-title">How Dose It Work?</h1>
        <div className="carousel">
          <div className="carousel-icon" onClick={goToPrevSlide}>
            <img
              src="./icons/ChevronLeft.svg"
              alt="Chevron pointing left icon"
            />
          </div>
          <div className="carousel-image-container">
            {Images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`Slide image ${idx}`}
                className={`carousel-image ${
                  currentSlide === idx ? "active" : "fade"
                }`}
              />
            ))}
          </div>
          <div className="carousel-icon" onClick={goToNextSlide}>
            <img
              src="./icons/ChevronRight.svg"
              alt="Chevron pointing right icon"
            />
          </div>
        </div>
        <div className="slider-description">
          {SliderContent.map((content, idx) => (
            <>
              <h3
                key={idx}
                className={`${
                  currentSlide === idx ? "" : "slider-content-none"
                }`}
              >
                Step {idx + 1}. {content.title}
              </h3>
              <p
                key={idx}
                className={`slider-description-text ${
                  currentSlide === idx ? "" : "slider-content-none"
                }`}
              >
                {content.description}
              </p>
            </>
          ))}
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-background" />
          {/* Help from ChatGPT */}
          <div
            className="progress-bar"
            style={{ width: `${(currentSlide + 1) * 33.33}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
