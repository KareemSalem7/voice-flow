import '../../styles/StyledPrompt.scss'
import React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
 
// Defining reference constants for animation of various components (to ensure style & motion consistency)
let easing = [0.6, -0.05, 0.01, 0.99];
const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };
 
// Have multiple grouped animated elements appear at slightly offset times.
const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    }
  }
};
 
// Motion properties for the dots which appear on the left-hand side of the page.
const sidebarDots = {
    initial: {
      x: -400
    },
    animate: {
      x: 0,
      transition: {
        duration: .2, ...transition
      }
    }
  };
 
  export const StyledDots = () => (
    <motion.div className="container-fluid"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100vh" }}
      transition={{ duration: 1, ease: easing }}
    >
            <motion.div className="wrapper" initial='initial' animate='animate'>
                <motion.div className="content_left" variants={stagger}>
                {/* The sidebar dots which enter from the left side. className="active" fills in the chosen dot. */}
                <motion.div className="dots" variants={stagger}>
                    <motion.span variants={sidebarDots}></motion.span>
                    <motion.span variants={sidebarDots}></motion.span>
                    <motion.span className="active" variants={sidebarDots}></motion.span>
                </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
);
 
export default StyledDots;