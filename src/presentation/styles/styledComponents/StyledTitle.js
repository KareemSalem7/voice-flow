import '../../styles/StyledHeader.scss'
import React from "react";
import { motion } from 'framer-motion';
import * as animationConstants from "./AnimationConstants.js";

export function AnimatedTitle() {
    return(
        <motion.h2 variants={animationConstants.stagger}>
        <motion.span variants={animationConstants.letter}>CHATBOT</motion.span>
        <motion.span variants={animationConstants.letterR}>PROMPT</motion.span>
        <motion.span variants={animationConstants.letter}>ANALYZER</motion.span>
      </motion.h2>
    )
}