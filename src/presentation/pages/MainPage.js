import '../styles/styleSheets/css//MainPage.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Link, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import React, {useState} from "react";
import TabGroup from "../styles/styledComponents/StyledHeader.js";
import * as animationConstants from "../styles/framerMotionComponents/AnimationConstants.js";
import {StyledRect} from "../styles/styledComponents/StyledRect.js";
import { motion } from 'framer-motion';
import { SidebarDots } from '../styles/framerMotionComponents/AnimatedComponents';
import { HoverButtonClick } from '../styles/framerMotionComponents/HoverButton';
import Modal from '../styles/framerMotionComponents/Modal.js'

/* define main page function 
Page responsible for displaying the 3 prompt choices and allowing user to flip through and select one
Also provides option to view help page and reupload info

*/

//This is the type of the voiceflow blocks
export const tabNames = ["General Prompts", "Leaf Node Prompts"];

var CurrentMessage = {[tabNames[0]]: " - Hello, here are some things I can help you with:", [tabNames[1]]: "- Hi, here are some things I can help you with:"}


function MainPage(){
  //we need this in StyledHeader; thats where the intents are actually displayed
  const location = useLocation();
  var currentOption = location.state?.currentOption;
  var currentIntents = location.state?.currentIntents; // The data passed from UploadPage!

  const navigate = useNavigate();
  function redirectToHelpPage(){
    

    // Store the intents when moving to HelpPage
    var intents = location.state?.bestIntents

    // Redirect to the HelpPage, passing the intents in so that they are stored
    navigate('/helppage', {state: { bestIntents : intents, currentOption : "General Prompts",  currentIntents : intents["General Prompts"] }});
  }

  // react function component for rerendering the screen
  const updateScreen = useForceUpdate();
  
  // custom react hook that rerenders the screen
  function useForceUpdate() {
    return React.useReducer(() => ({}), {})[1]
  }

  const [showModal, setShowModal] = useState(false);
  
  function closer() {
    setShowModal(false)
  }
  
  return (
    <>
    
    <Modal showModal={showModal} closer={closer} currIntent={currentIntents}/>
      <motion.div className="container-fluid-main"
          initial={animationConstants.containerDropIn.initial}
          animate={animationConstants.containerDropIn.animate}
          transition={animationConstants.containerDropIn.transition}
          >
        {/* Seperates the left header and prompt rectangle sections side by side */}
        <div className="MainPage-col">
          {/* Define left side with the dots and tabs side by side */}
          <div className="MainPage-left-header">
            <SidebarDots i={3}/>
            <TabGroup updateScreen={updateScreen} clickFunct={redirectToHelpPage}/>
          </div>

          {/* Define the right side with rectangle containing chosen prompt */}
          
          <div className="MainPage-right-content">
            {/* Display rectangle that displays the chosen prompt */}
            <StyledRect tabName={currentOption} intents={currentIntents} message={CurrentMessage[currentOption]}/>
            {/* Define button to confirm choice */}
            <HoverButtonClick clickFunction={setShowModal} text={"Add My Optimized First Block!"}/>
          </div>
        
        </div>
        
      </motion.div>
    </>
  );
};

export default MainPage;
