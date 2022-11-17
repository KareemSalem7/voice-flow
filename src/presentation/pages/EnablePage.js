// eslint-disable-next-line
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion";
import '../styles/EnablePage.scss'
import robotImg from '../assets/robot.png';
import NLUlogo from '../assets/NLULogoTransparentWhite.png';
import { SidebarDots } from '../components/animationComponents';
import React from 'react';

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

// Make object fade in via rising opacity while moving upwards to final location.
const fadeInUp = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: .3
    }
  }
};

// Logo animation properties.
const animateNLU = {
  initial: {
    y: 0,
    // x: -600,
    x: '-40vw',
    opacity: 0,
    transition: { duration: 0.05, ease: easing }
  },
  animate: {
    y: 0,
    // x: -450,
    x: '-30vw',
    opacity: 1,
    transition: {
      delay: .8,
      duration: 0.6,
      ease: easing
    }
  }
};

// motion.h3 animation properties.
const h3 = {
  initial: {
    top: "-20%",
    opacity: 0,
    transition: { duration: 0.05, ease: easing }
  },
  animate: {
    top: "50%",
    opacity: .1,
    transition: {
      delay: 1.2,
      duration: 0.6,
      ease: easing
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

// Motion properties for text.
const letter = {
  initial: {
    opacity: 0,
    x: -400,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1, ...transition
    }
  }
};

const letterR = {
  initial: {
    opacity: 0,
    x: 400,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1, ...transition
    }
  }
};

// Motion properties for the robot png.
const robot = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.2, duration: .2, ...transition }
  }
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 6, bounce: 0 },
        opacity: { delay, duration: 0.5 },
        repeat: Infinity,
        repeatType: 'reverse',
      }
    };
  }
};

function EnablePage() {
  const curly = "{    }"
  return (

    <motion.div className="container-fluid"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100vh" }}
      transition={{ duration: 1, ease: easing }}
    >
      <motion.div className="wrapper" initial='initial' animate='animate'>

        {/* The logo which appears in the top right corner of the page (as defined by className). */}
        <motion.div className="pos_abs top_nav" variants={stagger}>
          <motion.img src={NLUlogo} alt="NLUlogo" height="100vh" variants={animateNLU} />
        </motion.div>
        <motion.div className="content_left" variants={stagger}>

          {/* The background number on the main page. */}
          <motion.h3 variants={h3}>{curly}</motion.h3>

          {/* The sidebar dots which enter from the left side. className="active" fills in the chosen dot. */}
          <motion.div className="dots" variants={stagger}>
            <motion.span className="active" variants={sidebarDots}></motion.span>
            <motion.span variants={sidebarDots}></motion.span>
            <motion.span variants={sidebarDots}></motion.span>
          </motion.div>

          {/* The title text which appears from within the "0" of the background number. Entrance animation is staggered out, as per variants={stagger} */}
          <motion.h2 variants={stagger}>
            <motion.span variants={letter}>CHATBOT</motion.span>
            <motion.span variants={letterR}>PROMPT</motion.span>
            <motion.span variants={letter}>ANALYZER</motion.span>
          </motion.h2>

          {/* Intro text which appears below the title. */}
          <motion.p variants={fadeInUp}>Take your Chatbot to the next level with <br />a few simple clicks!</motion.p>

          {/* Link to UploadPage.js which enters below the intro text. */}
          <Link to="/uploadpage">
            <motion.h1 variants={fadeInUp} whileHover={{ scale: 1.2, duration: 1 }}>GET STARTED HERE</motion.h1>
          </Link>


        </motion.div>

        {/* The robot (or other image if changed) which fills in the right hand side of the page. */}
        <motion.div className="image_container" variants={stagger}>
          {/* <motion.img src={robotImg} alt="robotImg" variants={robot}/> */}
          <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <motion.path initial="hidden" animate="visible" stroke-linecap="round" variants={draw} stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default EnablePage;