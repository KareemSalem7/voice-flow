// DONT remove router, route, and routes, ignore warning this is needed
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion";
import '../../../src/presentation/styles/EnablePage.scss'
import robotImg from '../../../src/presentation/assets/robot.png';
import NLUlogo from '../../../src/presentation/assets/NLUlogo(NT).png';

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

function EnablePage() {
  return (

    <motion.div className="container-fluid"
      initial={{ opacity: 0, height: 0}}
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
          <motion.h3 variants={h3}>05</motion.h3>

          {/* The sidebar dots which enter from the left side. className="active" fills in the chosen dot. */}
          <motion.div className="dots" variants={stagger}>
            <motion.span className="active" variants={sidebarDots}></motion.span>
            <motion.span variants={sidebarDots}></motion.span>
            <motion.span variants={sidebarDots}></motion.span>
            <motion.span variants={sidebarDots}></motion.span>
            <motion.span variants={sidebarDots}></motion.span>
          </motion.div>

          {/* The title text which appears from within the "0" of the background number. Entrance animation is staggered out, as per variants={stagger} */}
          <motion.h2 variants={stagger}>
            <motion.span variants={letter}>CHATBOT</motion.span>
            <motion.span variants={letter}>PROMPT</motion.span>
            <motion.span variants={letter}>ANALYZER</motion.span>
          </motion.h2>

          {/* Intro text which appears below the title. */}
          <motion.p variants={fadeInUp}>Take your Chatbot to the next level with <br />a few simple clicks!</motion.p>

          {/* Link to UploadPage.js which enters below the intro text. */}
            <Link to="/uploadpage">
              <motion.h1 variants={fadeInUp} whileHover={{ scale: 1.2, duration: 1}}>GET STARTED HERE</motion.h1>
            </Link>


        </motion.div>

        {/* The robot (or other image if changed) which fills in the right hand side of the page. */}
        <motion.div className="image_container" variants={stagger}>
          <motion.img src={robotImg} alt="robotImg" variants={robot}/>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default EnablePage;