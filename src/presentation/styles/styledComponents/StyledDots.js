import '../../styles/StyledHeader.scss'
import React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as animationConstants from "./AnimationConstants.js";

// set the div containing the styled dots to have a width of 5
const StyledDiv = styled.div`
  width: 5vh;
`;

export function SidebarDots(props) {
  if (props.i === 1) {
    // Sidebar dots for the first page - EnablePage.js
    return (
      <motion.div className="dots" variants={animationConstants.stagger}>
        <motion.span className="active" variants={animationConstants.sidebarDots}></motion.span>
        <motion.span variants={animationConstants.sidebarDots}></motion.span>
        <motion.span variants={animationConstants.sidebarDots}></motion.span>
      </motion.div>
    )
  }
  // Sidebar dots for the second page - UploadPage.js
  else if (props.i === 2) {
    return (
      <motion.div className="dots" variants={animationConstants.stagger}>
        <motion.span variants={animationConstants.sidebarDots2}></motion.span>
        <motion.span className="active" variants={animationConstants.sidebarDots2}></motion.span>
        <motion.span variants={animationConstants.sidebarDots2}></motion.span>
      </motion.div>)
  }
  else if (props.i === 3) {
    // Sidebar dots for the third page - MainPage.js
    return (<StyledDiv>
      <div className="container-fluid-main"
          initial={animationConstants.containerDropIn.initial}
          animate={animationConstants.containerDropIn.animate}
          transition={animationConstants.containerDropIn.transition}
      >
        <motion.div className="wrapper" initial='initial' animate='animate'>
          <motion.div className="content_left" variants={animationConstants.stagger}>
            {/* The sidebar dots which enter from the left side. className="active" fills in the chosen dot. */}
            <motion.div className="dots-main" variants={animationConstants.stagger}>
              <motion.span variants={animationConstants.sidebarDots}></motion.span>
              <motion.span variants={animationConstants.sidebarDots}></motion.span>
              <motion.span className="active" variants={animationConstants.sidebarDots}></motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </StyledDiv>)
  }

}