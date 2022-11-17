// eslint-disable-next-line
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import '../styles/UploadPage.scss';
import '../styles/UploadPage.css';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SidebarDots } from '../components/animationComponents';
import { React, useState } from 'react';
//added by martin for sending api to backend
import { sendApi } from '../../controllers/UserRequests.js';

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

function UploadPage() {
  const [api, setapi] = useState(false);
  const [ver, setver] = useState(false);
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
              variants={stagger}>
              <form class="main__form">
                <div class="row">

                  {/* API input box. */}
                  <motion.div variants={fadeInUp}>
                    <div class="form-group">
                      <input type="text" class="form-control" id="apiKey" aria-describedby="apiKey" placeholder="API Key" onChange={() => setapi(!(document.getElementById("apiKey") === ""))} required />
                      <label for="apiKey">API Key</label>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp}>

                    {/* Version ID input box. */}
                    <div class="form-group">
                    <input type="text" class="form-control" id="versionID" aria-describedby="versionID" placeholder="Version ID" onChange={() => setver(!(document.getElementById("versionID") === ""))} required />
                      <label for="versionID">Version ID</label>
                    </div>
                    <div class="col-md-6">
                    </div>
                  </motion.div>
                </div>

                {/* Submit button. */}
                <div class="text-center">

                  <div>

                    <button type="submit" class=" btn btn-get">

                      {(api && ver) ? (
                        <Link to="/mainpage" style={{ textCol: "white" }} onClick={sendApi}><span> Submit Now!</span></Link>
                      ) : (
                        <span> Submit Now!</span>
                      )}

                    </button>
                  </div>


                  {/* Note: onclick function added to send data */}
                </div>

              </form>
            </motion.div>
            <motion.div className="content_left" variants={stagger}>

              {/* The sidebar dots which enter from the left side. className="active" fills in the chosen dot. */}
              <SidebarDots i={2} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}


export default UploadPage;
