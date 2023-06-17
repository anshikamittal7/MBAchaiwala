import React from "react";
import { delay, motion } from "framer-motion";

const Section = ({
  h3,
  text,
  hasBtn,
  btnText,
  imgSrc,
  imgSize = "70%",
  bkgclr,
  headingclr,
  txtclr,
  btnbgclr,
  btnclr,
}) => {
  const headingAnimation = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };
  const paraAnimation = {
    ...headingAnimation,
    transition: {
      delay: 0.3,
    },
  };
  const btnAnimation = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    },
  };
  const imgAnimation = {
    initial: {
      transform: "scale(0.5)",
      opacity: 0,
    },
    whileInView: {
      transform: "scale(1)",
      opacity: 1,
    },
    transition: {
      delay: 0.1,
      ease: "easeIn",
    },
  };
  return (
    <section style={{ backgroundColor: bkgclr }} className="section">
      <div>
        <motion.h3
          style={{ color: headingclr }}
          data-cursorpointer={true}
          {...headingAnimation}
        >
          {h3}
        </motion.h3>

        <motion.p
          style={{ color: txtclr }}
          data-cursorpointer={true}
          {...paraAnimation}
        >
          {text}
        </motion.p>

        {hasBtn && (
          <motion.button
            style={{ color: btnclr, backgroundColor: btnbgclr }}
            data-cursorpointer={true}
            {...btnAnimation}
          >
            {btnText}
          </motion.button>
        )}
        <div>
          <motion.img
            src={imgSrc}
            alt="img"
            style={{ width: imgSize }}
            {...imgAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
