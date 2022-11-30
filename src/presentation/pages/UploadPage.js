// eslint-disable-next-line
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import '../styles/styleSheets/sass/UploadPage.scss';
import '../styles/styleSheets/css/UploadPage.css';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { SidebarDots } from '../styles/styledComponents/StyledDots';
import * as animationConstants from "../styles/framerMotionComponents/AnimationConstants.js";
import { React, useState } from 'react';
//added by martin for sending api to backend
import { sendUserInfo} from '../../controllers/UserRequests.js';
import { SidebarDots, AnimatedInput } from '../styles/framerMotionComponents/AnimatedComponents'

function UploadPage() {
  const [api, setapi] = useState(false);
  const [ver, setver] = useState(false);
  const [email, setemail] = useState(false);
  const [pass, setpass] = useState(false);
  const [diag, setdiag] = useState(false);

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
              <motion.h3 variants={animationConstants.h3Opaque} class="text-center">Submit Your Information Below</motion.h3>
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
                      <input type="text" class="form-control" id="apiKey" aria-describedby="apiKey" placeholder="API Key" onInput={() => setapi(!(document.getElementById("apiKey") === ""))} onChange={() => setapi(!(document.getElementById("apiKey") === ""))} required />
                      <label for="apiKey">API Key</label>
                    </div>
                  </motion.div>
                  {/* <AnimatedInput text={"API Key"} id={"apiKey"} /> */}
                  <motion.div variants={animationConstants.fadeInUp}>


                    {/* Version ID input box. */}
                    <div class="form-group">
                      <input type="text" class="form-control" id="versionID" aria-describedby="versionID" placeholder="Version ID" onInput={() => setver(!(document.getElementById("versionID") === ""))} onChange={() => setver(!(document.getElementById("versionID") === ""))} required />
                      <label for="versionID">Version ID</label>
                    </div>
                    <div class="col-md-6">
                    </div>
                  </motion.div>
                  {/* <AnimatedInput text={"Version ID"} id={"versionID"} /> */}
                </div>
                <div class="col-md-6">

                  {/* Email Address input box. */}
                  <motion.div variants={animationConstants.fadeInUp}>
                    <div class="form-group">
                      <input type="text" class="form-control" id="emailAddress" aria-describedby="emailAddress" placeholder="Email Address" onChange={() => setemail(!(document.getElementById("emailAddress") === ""))} required />
                      <label for="emailAddress">Email Address</label>
                    </div>
                  </motion.div>
                  {/* <AnimatedInput text={"Email Address"} id={"emailAddress"} /> */}

                  {/* Password input box. */}
                  <motion.div variants={animationConstants.fadeInUp}>
                    <div class="form-group">
                      <input type="text" class="form-control" id="password" aria-describedby="password" placeholder="Password" onChange={() => setpass(!(document.getElementById("password") === ""))} required />
                      <label for="password">Password</label>
                    </div>
                  </motion.div>
                  {/* <AnimatedInput text={"Password"} id={"password"} /> */}

                  {/* Diagram ID input box. */}
                  <motion.div variants={animationConstants.fadeInUp}>
                    <div class="form-group">
                      <input type="text" class="form-control" id="diagramID" aria-describedby="diagramID" placeholder="Diagram ID" onChange={() => setdiag(!(document.getElementById("diagramID") === ""))} required />
                      <label for="password">Diagram ID</label>
                    </div>
                  </motion.div>
                  {/* <AnimatedInput text={"Diagram ID"} id={"diagramID"} /> */}


                </div>


                {/* Submit button. */}
                <div>

                  <div>

                    <button type="submit" class=" btn btn-get" data-testid="button-test">
                      {/* CHANGE MADE BY RUMAISA: added "&& email ... && diag" */}


                      {(api && ver && email && pass & diag) ? (
                        <Link to="/mainpage" style={{ textCol: "white" }} onClick={sendUserInfo}><span> Submit Now!</span></Link>
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
              <div data-testid="sidebar-upload">
              <SidebarDots i={2}/>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}


export default UploadPage;
