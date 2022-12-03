import '../styles/styleSheets/css//MainPage.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Link, Route, Routes, useLocation} from 'react-router-dom';
import React, {useState} from "react";
import TabGroup, { activeTab} from "../styles/styledComponents/StyledHeader.js";
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

function MainPage(){
const location = useLocation();
const data = location.state?.data; // The data passed from UploadPage!

  // set updatePrompt to react hook function useUpdatePrompt()
  const updatePrompt = useUpdatePrompt();
  // we define the seperate updatePrompt const and updatePromptScreen function as a work around to call react hook function here
  const updatePromptScreen = () => {
    updatePrompt();
  }
  
  //send alert to inform user of confirmed choice when confirm button is pressed
  function confirmChoice(){ 
    alert(activeTab + " Selected!");
  }
  
  //react hook function to update the selected prompt rectangle on the view
  function useUpdatePrompt(){
    // eslint-disable-next-line
    const [value, setValue] = useState(0); // set current integer state
    return () => setValue(value => value + 1); // update state to force render
    // increment the previous state to update the view 
  }
  const [showModal, setShowModal] = useState(false);
  function closer() {
    setShowModal(false)
  }
  return (
    <>
    
    <Modal showModal={showModal} closer={closer}/>
      <motion.div className="container-fluid-main"
          initial={animationConstants.containerDropIn.initial}
          animate={animationConstants.containerDropIn.animate}
          transition={animationConstants.containerDropIn.transition}
          >
            <p>{data.title}</p>
        {/* Seperates the left header and prompt rectangle sections side by side */}
        <div className="MainPage-col">
          {/* Define left side with the dots and tabs side by side */}
          <div className="MainPage-left-header">
            <SidebarDots i={3}/>
            <TabGroup updatePromptScreen={updatePromptScreen}/>
          </div>

          {/* Define the right side with rectangle containing chosen prompt */}
          
          <div className="MainPage-right-content">
            {/* Display rectangle that displays the chosen prompt */}
            <StyledRect/>
            {/* Define button to confirm choice */}
            <HoverButtonClick clickFunction={setShowModal} text={"Add My Optimized First Block!"}/>
          </div>
        
        </div>
        
      </motion.div>
    </>
  );
};

export default MainPage;
