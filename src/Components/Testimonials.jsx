import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit
          quibusdam nostrum asperiores.
        </p>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            rerum quibusdam obcaecati illo.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Ankush Kumar</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
