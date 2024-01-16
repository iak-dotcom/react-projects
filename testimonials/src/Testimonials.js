import React from "react";
import { useState } from "react";
import "./style.css";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "I highly recommend it!",
      author: "John Smith",
    },
    {
      quote: "This is the best product I`ve ever used.",
      author: "Jane Doe",
    },
    {
      quote: "This was life changing experience!",
      author: "Imran Khan",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <testimonials className="nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </testimonials>
    </div> /* end of testimonial */
  );
}
export default Testimonials;
