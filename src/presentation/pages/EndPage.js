//import styled from "styled-components";
import React from "react";
import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0, rotate: 360},
  visible: (i) => {
    const delay = 0.5
    return {
      pathLength: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
        opacity: { delay, duration: 0.05 },
        rotate: {delay, duration: 1}
      }
    };
  }
};

function EndPage(){
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" initial="hidden"
    animate="visible" class="w-6 h-6" width="50vw" height="50vw">
    <motion.path stroke-linecap="round" stroke-linejoin="round" variants={draw} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </motion.svg>
  );
};

export default EndPage;
