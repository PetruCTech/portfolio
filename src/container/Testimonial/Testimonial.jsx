import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images, portfolio } from "../../constants";
import "./Testimonial.scss";

// Testimonial
const Testimonial = () => {
  const [brands] = useState([
    { _id: "react", name: "React", imgUrl: images.react },
    { _id: "node", name: "Node.js", imgUrl: images.node },
    { _id: "python", name: "Python", imgUrl: images.python },
    { _id: "graphql", name: "GraphQL", imgUrl: images.graphql },
    { _id: "typescript", name: "TypeScript", imgUrl: images.typescript },
    { _id: "git", name: "Git", imgUrl: images.git },
  ]);
  const [testimonials] = useState(portfolio.highlights);
  const [currentIndex, setCurrentIndex] = useState(0);

  // handle btn click
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length > 0 && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={images.profile} alt={test.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
