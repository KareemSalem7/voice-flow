// eslint-disable-next-line
import { BrowserRouter as Router, Link, Route, Routes, Navigate, redirect, useNavigate, useLocation } from 'react-router-dom';
import '../styles/styleSheets/sass/UploadPage.scss';
import '../styles/styleSheets/css/UploadPage.css';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { SidebarDots } from '../styles/styledComponents/StyledDots';
import * as animationConstants from "../styles/framerMotionComponents/AnimationConstants.js";
import { React, useState } from 'react';
//added by martin for sending api to backend
import { getBestIntents } from '../../controllers/UserRequests.js';
import { SidebarDots, AnimatedInput } from '../styles/framerMotionComponents/AnimatedComponents'
import { render } from '@testing-library/react';

function UploadPage() {
  const [api, setapi] = useState(false);
  const [ver, setver] = useState(false);

  const navigate = useNavigate();

  // Function used to get the intents from the mainpage
  async function redirectToIntentPage(){

    // getting the intents from the backend is asynchronous, so wait for them to come before redirecting to the next page
    var intents = await getBestIntents();

    // redirect to the mainpage, passing the intents in
    navigate('/mainpage', {state: { bestIntents : intents, currentOption : "Option A",  currentIntents : intents["Option A"] }});
  }


  return (
    <div className="main_container">
      <section className="ready__started project__form">

        {/* Set the animation values. */}
        <motion.div className="container-fluid"
          initial={animationConstants.containerDropIn.initial}
          animate={animationConstants.containerDropIn.animate}
          transition={animationConstants.containerDropIn.transition}
        >
          <motion.div className="wrapper" initial='initial' animate='animate'>

            {/* Title section. */}
            <motion.div className="pos_abs top_nav" variants={animationConstants.stagger}>
              <motion.h3 variants={animationConstants.h3Opaque} className="text-center">Submit Your Information Below</motion.h3>
            </motion.div>

            {/* Create the form for user input */}
            <motion.div className="ready__started-box"
              initial={{ opacity: 0, height: 0, y: 0, x: '38vw' }}
              animate={{ opacity: 1, height: "50vh", y: 50, x: '38vw' }}
              transition={{ duration: 1, ease: animationConstants.easing }}
              variants={animationConstants.stagger}>

              <form className="main__form">
                <div className="row">

                  {/* API input box. */}
                  <motion.div variants={animationConstants.fadeInUp}>
                    <div className="form-group">
                      <input type="password" className="form-control" id="apiKey" aria-describedby="apiKey" placeholder="API Key" onInput={() => setapi(!(document.getElementById("apiKey") === ""))} onChange={() => setapi(!(document.getElementById("apiKey") === ""))} required />
                      <label htmlFor="apiKey">API Key</label>
                    </div>
                  </motion.div>
                  <motion.div variants={animationConstants.fadeInUp}>


                    {/* Version ID input box. */}
                    <div className="form-group">
                      <input type="text" className="form-control" id="versionID" aria-describedby="versionID" placeholder="Version ID" onInput={() => setver(!(document.getElementById("versionID") === ""))} onChange={() => setver(!(document.getElementById("versionID") === ""))} required />
                      <label htmlFor="versionID">Version ID</label>
                    </div>
                    <div className="col-md-6">
                    </div>
                  </motion.div>
                </div>
                <div className="col-md-6">
                </div>


                {/* Submit button. */}
                <div>

                  <div>
                    <button type="submit" className=" btn btn-get" >
                      {(api && ver) ? (
                        // onclick, call the async function that gets the best intents, and then switches to the next page
                        <Link className="link" onClick={async () => {await redirectToIntentPage();}} data-testid="enabled-link"><span color="white"> Submit Now!</span></Link>
                      ) : (
                        <span data-testid="disabled-link"> Submit Now!</span>
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
                <SidebarDots i={2} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );

}


export default UploadPage;
