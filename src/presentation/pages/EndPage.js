//import styled from "styled-components";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import '../styles/styleSheets/css//EndPage.css';
import * as animationConstants from "../styles/framerMotionComponents/AnimationConstants.js";
import {HoverButtonLink} from "../styles/framerMotionComponents/HoverButton.js";
import React from "react";
import { motion } from 'framer-motion';
import { drawSuccess } from '../styles/framerMotionComponents/AnimationConstants';

function EndPage(){
  return (

  <motion.div className="EndPage" 
  initial={animationConstants.containerDropIn.initial}
  animate={animationConstants.containerDropIn.animate}
  transition={animationConstants.containerDropIn.transition}
  >

      {/* <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" initial="hidden"
      animate="visible" class="w-6 h-6" width="50vw" height="50vw">
      <motion.path stroke-linecap="round" stroke-linejoin="round" variants={drawSuccess} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </motion.svg>
    </motion.div> */}
    

    <motion.div className="End-left-content"
    initial={{x: 0}}
    animate={{x: "-50%"}}
    transition={animationConstants.transitionEnd}
    >
      <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" initial="hidden"
      animate="visible" className="w-6 h-6" width="50vw" height="50vw" data-testid="svg-container">
      <motion.path strokeLinecap="round" strokeLinejoin="round" variants={drawSuccess} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </motion.svg>
    </motion.div>
    
    <motion.div className="End-text"
      initial={animationConstants.containerDropIn.initial}
      animate={{opacity: 1, height: "85vh"}}
      transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.9], delay: 2.8}}>
      
        <p>Thank you for using our services!</p>
        <p>We have now added your optimized first block to your desired Voiceflow canvas. Please open the
        <br></br>following link, sign into your Voiceflow account and navigate to the canvas of the chatbot
        <br></br>you have asked us to analyze. (
        <a href="https://www.voiceflow.com" target="_blank" rel="noreferrer">
          Voiceflow
        </a>
        )
        <br></br>
         <br></br>To maximize the results produce by this optimized first block and our analysis, please update
         <br></br>the text on the buttons we have provided to be as specific and helpful to your customers as
         <br></br>possible. The sentences you provide should have a strong likeness to statements a customer
         <br></br> might make to get help with the item resembling each of the intents we have provided.

         <br></br>
         <br></br>Next, please place this new block in the place of your intial first block and attach all of 
         <br></br>the different pieces of your chatbot accordingly.

         <br></br>
         <br></br>When you have collected new data for this chatbot and would like to have it analyzed again or
         <br></br> if you wish to have another chatbot analyzed in the near future, come pay us another visit. 

         <br></br>
         <br></br>To return to the starting page of our application, click the button below.
         <br></br>We look forward to seeing you again!
        </p>
        <HoverButtonLink text="RETURN TO START" linky='/'/>
    </motion.div>
    
    

  </motion.div>
  );
};

export default EndPage;
