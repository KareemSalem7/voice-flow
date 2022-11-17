// eslint-disable-next-line
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion";
import '../styles/EnablePage.scss'
import NLUlogo from '../assets/NLULogoTransparentWhite.png';
import { SidebarDots } from '../styles/styledComponents/StyledDots';
import { AnimatedTitle } from '../styles/styledComponents/StyledTitle';
import { DrawTextBubble } from '../styles/styledComponents/DrawTextboxSVG';
import { AnimatedLogo } from '../styles/styledComponents/AnimatedLogo';
import React from 'react';
import * as animationConstants from "../styles/styledComponents/AnimationConstants.js";

function EnablePage() {
  const curly = "{}"
  return (

    <motion.div className="container-fluid"
      initial={animationConstants.containerDropIn.initial}
      animate={animationConstants.containerDropIn.animate}
      transition={animationConstants.containerDropIn.transition}
    >
      <motion.div className="wrapper" initial='initial' animate='animate'>

        {/* The logo which appears in the top right corner of the page (as defined by className). */}
        <AnimatedLogo />

        <motion.div className="content_left" variants={animationConstants.stagger}>

          {/* The background number on the main page. */}
          <motion.h3 variants={animationConstants.h3}>{curly}</motion.h3>

          {/* The sidebar dots which enter from the left side. className="active" fills in the chosen dot. */}
          <SidebarDots i={1} />


          {/* The title text which appears from within the "0" of the background number. Entrance animation is staggered out, as per variants={stagger} */}
          <AnimatedTitle />

          {/* Intro text which appears below the title. */}
          <motion.p variants={animationConstants.fadeInUp}>Take your Chatbot to the next level with <br />a few simple clicks!</motion.p>

          {/* Link to UploadPage.js which enters below the intro text. */}
          <Link to="/uploadpage">
            <motion.h1 variants={animationConstants.fadeInUp} whileHover={{ scale: 1.2, duration: 1 }}>GET STARTED HERE</motion.h1>
          </Link>


        </motion.div>

        {/* The text bubble svg which fills in the right hand side of the page. */}
        <DrawTextBubble />

      </motion.div>
    </motion.div>
  );
}

export default EnablePage;