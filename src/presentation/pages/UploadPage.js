// eslint-disable-next-line
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import '../styles/UploadPage.scss';
import '../styles/UploadPage.css';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SidebarDots } from '../styles/styledComponents/StyledDots';
import * as animationConstants from "../styles/styledComponents/AnimationConstants.js";
import { React, useState } from 'react';
//added by martin for sending api to backend
import { sendApi } from '../../controllers/UserRequests.js';

function UploadPage() {
  const [api, setapi] = useState(false);
  const [ver, setver] = useState(false);
  return (
    <div className="main_container">
      <section class="ready__started project__form">

        {/* Set the animation values. */}
        <motion.div class="container-fluid"
          initial={animationConstants.containerDropIn.initial}
          animate={animationConstants.containerDropIn.animate}
          transition={animationConstants.containerDropIn.transition}
          >
          <motion.div className="wrapper" initial='initial' animate='animate'>

            {/* Title section. */}
            <motion.div className="pos_abs top_nav" variants={animationConstants.stagger}>
              <motion.h3 variants={animationConstants.h3} class="text-center">Submit Your Information Below</motion.h3>
            </motion.div>

            {/* Create the form for user input */}
            <motion.div class="ready__started-box"
              initial={{ opacity: 0, height: 0, y: 0, x: '38vw' }}
              animate={{ opacity: 1, height: "50vh", y: 50, x: '38vw' }}
              transition={{ duration: 1, ease: animationConstants.easing }}
              variants={animationConstants.stagger}>
              <form class="main__form">
                <div class="row">

                  {/* API input box. */}
                  <motion.div variants={animationConstants.fadeInUp}>
                    <div class="form-group">
                      <input type="text" class="form-control" id="apiKey" aria-describedby="apiKey" placeholder="API Key" onChange={() => setapi(!(document.getElementById("apiKey") === ""))} required />
                      <label for="apiKey">API Key</label>
                    </div>
                  </motion.div>
                  <motion.div variants={animationConstants.fadeInUp}>

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
                <div>

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
            <motion.div className="content_left" variants={animationConstants.stagger}>

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
