import { motion } from "framer-motion";
import * as animationConstants from "./AnimationConstants.js";
import {logoString} from '../../assets/LogoURL.js';
import '../styleSheets/sass//EnablePage.scss';
import '../styleSheets/sass/StyledHeader.scss'
import '../styleSheets/css/UploadPage.css'
import { Component, React } from "react";
import styled from 'styled-components';

// set the div containing the styled dots to have a width of 5
const StyledDiv = styled.div`
  width: 5vh;
`;

// Create an animated logo image which enters from the left into the top-left corner of the page.
export function AnimatedLogo() {
  return (
    <motion.div className="pos_abs top_nav" variants={animationConstants.stagger}>
      <motion.img src={logoString} alt="NLUlogo" height="100vh" variants={animationConstants.animateNLU} />
    </motion.div>)
}

export class AnimatedInput extends Component {
  render() {
    return (
      <motion.div variants={animationConstants.fadeInUp}>
        <div class="form-group">
          <input type="text" class="form-control" id={this.props.id} aria-describedby={this.props.id} placeholder={this.props.text} required />
          <label for="versionID">{this.props.text}</label>
        </div>
        <div class="col-md-6">
        </div>
      </motion.div>

    )
  }
}

// Draw an SVG text bubble on the right side of EnablePage.js
export function DrawTextBubble() {
  return (
    <motion.div className="image_container" variants={animationConstants.stagger}>
      <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
        <motion.path initial="hidden" animate="visible" strokeLinecap="round" variants={animationConstants.draw} strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </motion.svg>
    </motion.div>
  )
}

// Create the title which appears on the left side of EnablePage.js
export function AnimatedTitle() {
  return (
    <motion.h2 variants={animationConstants.stagger}>
      <motion.span variants={animationConstants.letter}><em>PROMPT-LY:</em></motion.span>
      <motion.span variants={animationConstants.letterR}>The Chatbot</motion.span>
      <motion.span variants={animationConstants.letter}>Analyzer</motion.span>
    </motion.h2>
  )
}

// Create the sidebar progress tracking dots which appear on EnablePage.js, UploadPage.js, and MainPage.js.
export function SidebarDots(props) {
  if (props.i === 1) {
    // Sidebar dots for the first page - EnablePage.js
    return (
      <motion.div className="dots" variants={animationConstants.stagger} data-testid="sidebar-upload">
        <motion.span className="active" variants={animationConstants.sidebarDots} data-testid="active-dot"></motion.span>
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
        <motion.span className="active" variants={animationConstants.sidebarDots2} data-testid="active-dot"></motion.span>
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
            <motion.div className="dots-main" variants={animationConstants.stagger} data-testid="sidebar-upload">
              <motion.span variants={animationConstants.sidebarDots}></motion.span>
              <motion.span variants={animationConstants.sidebarDots}></motion.span>
              <motion.span className="active" variants={animationConstants.sidebarDots} data-testid="active-dot"></motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </StyledDiv>)
  }

}