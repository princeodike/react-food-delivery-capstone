import React, { useState } from 'react';
import { testimonialsData } from '../data/foodData';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header-center">
          <h2 className="section-title">Testimonials About Us</h2>
          <div className="title-underline" />
          <p className="testimonial-lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            scelerisque nisl .
          </p>
        </div>

        <div className="testimonial-slider">
          <button
            type="button"
            className="slider-arrow"
            aria-label="Previous testimonial"
            onClick={handlePrev}
          >
            <ChevronLeftIcon />
          </button>

          <div className="testimonial-card">
            <img
              src={current.image}
              alt={current.name}
              className="testimonial-avatar"
            />
            <div className="testimonial-body">
              <p className="testimonial-quote">{current.review}</p>
              <h4 className="testimonial-name">{current.name}</h4>
              <span className="testimonial-location">{current.location}</span>
            </div>
          </div>

          <button
            type="button"
            className="slider-arrow"
            aria-label="Next testimonial"
            onClick={handleNext}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;