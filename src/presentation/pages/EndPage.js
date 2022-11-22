//import styled from "styled-components";
import React from "react";
import { motion } from 'framer-motion';
import { drawSuccess } from '../styles/framerMotionComponents/AnimationConstants';

function EndPage(){
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" initial="hidden"
    animate="visible" class="w-6 h-6" width="50vw" height="50vw" data-testid="svg-container">
    <motion.path stroke-linecap="round" stroke-linejoin="round" variants={drawSuccess} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </motion.svg>
  );
};

export default EndPage;
