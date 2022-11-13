// eslint-disable-next-line
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import '../styles/UploadPage.scss';
import '../styles/UploadPage.css';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
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

// Motion properties for the robot png.
const logoMove = {
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

// Defining reference constants for animation of various components (to ensure style & motion consistency)
const fadeInUp = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: .3
    }
  }
};

const sidebarDots = {
  initial: {
    x: '-100vw'
  },
  animate: {
    x: '-49.3vw',
    transition: {
      duration: .2, ...transition
    }
  }
};

const letter = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 80,
    transition: {
      duration: 1, ...transition,
      delay: 1.2,
    }
  }
};

const h3 = {
  initial: {
    top: "-20%",
    opacity: 0,
    transition: { duration: 0.05, ease: easing },
    scale: 0.8
  },
  animate: {
    top: "50%",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

// function getInitialState() {
//   return {
//     apiKey: '',
//     versionID: '',
//     apiKeyValid: false,         // valid flags for each field
//     versionIDValid: false, 
//     linkDisabled: true       // separate flag for link
//   }
// };
// function handleChangeApiKey(e) {         // separate handler for each field
//   let apiKeyValid = e.target.value ? true : false;        // basic email validation
//   let submitValid = this.state.versionIDValid && apiKeyValid   // validate total form
//   this.setState({
//     apiKey: e.target.value,
//     apiKeyValid: apiKeyValid, 
//     linkDisabled: !submitValid
//   })
// };
// function handleChangeVersionID(e) {         // separate handler for each field
//   let versionIDValid = e.target.value ? true : false;        // basic text validation
//   let submitValid = this.state.apiKeyValid && versionIDValid   // validate total form
//   this.setState({
//     text: '',
//     versionIDValid: versionIDValid, 
//     linkDisabled: !submitValid
//   })
// };

function UploadPage() {
  return (
    <div className="main_container">
      <section class="ready__started project__form">

        {/* Set the animation values. */}
        <motion.div class="container-fluid"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          transition={{ duration: 1, ease: easing }}>
          <motion.div className="wrapper" initial='initial' animate='animate'>

            {/* Title section. */}
            <motion.div className="pos_abs top_nav" variants={stagger}>
              <motion.h3 variants={h3} class="text-center">Submit Your Information Below</motion.h3>
            </motion.div>

            {/* Create the form for user input */}
            <motion.div class="ready__started-box"
              initial={{ opacity: 0, height: 0, y: 0, x: '38vw' }}
              animate={{ opacity: 1, height: "50vh", y: 50, x: '38vw' }}
              transition={{ duration: 1, ease: easing }}
              whileHover={{scale: [null, 1.2]}}
              variants={stagger}>
              <form class="main__form">
                <div class="row">

                  {/* API input box. */}
                  <motion.div variants={fadeInUp}>
                    <div class="form-group">
                      <input type="text" class="form-control" id="apiKey" aria-describedby="apiKey" placeholder="API Key" required />
                      <label for="apiKey">API Key</label>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp}>

                    {/* Version ID input box. */}
                    <div class="form-group">
                      <input type="text" class="form-control" id="versionID" aria-describedby="versionID" placeholder="Version ID" required />
                      <label for="versionID">Version ID</label>
                    </div>
                    <div class="col-md-6">
                    </div>
                  </motion.div>
                </div>

                {/* Submit button. */}
                <div class="text-center">
                  <Link to="/mainpage">
                    <button type="submit" class=" btn btn-get"><span> Submit Now!</span></button></Link></div>
                
                {/* Spacing for the link at the botttom of the form. */}
                <p class="text-center"><br></br><br></br><br></br><br></br></p>

                {/* Link to help page. */}
                <motion.div variants={fadeInUp}><Link to="/helppage"><p class="text-center">Don't know this information?</p></Link></motion.div>

              </form>
            </motion.div>
            <motion.div className="content_left" variants={stagger}>

              {/* The sidebar dots which enter from the left side. className="active" fills in the chosen dot. */}
              <motion.div className="dots" variants={stagger}>
                <motion.span variants={sidebarDots}></motion.span>
                <motion.span className="active" variants={sidebarDots}></motion.span>
                <motion.span variants={sidebarDots}></motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}


export default UploadPage;
