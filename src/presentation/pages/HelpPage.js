import '../styles/styleSheets/css//HelpPage.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Link, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import * as animationConstants from "../styles/framerMotionComponents/AnimationConstants.js";
import {React, useState} from "react";
import { motion } from 'framer-motion';
import * as styledComponent from '../styles/styledComponents/StyledTitle';
import { HelpText } from '../styles/commonComponents/HelpRow.js'
import { HoverButtonClick } from '../styles/framerMotionComponents/HoverButton.js'
 
// define animation and structure of the help page
function HelpPage(){
  const navigate = useNavigate();
  const location = useLocation();
  var intents = location.state?.bestIntents;
  var currOpt = location.state?.currentOption;
  var currIntent = location.state?.currentIntents;

  function redirectToMainPage() {
    navigate('/mainpage', {state: { bestIntents : intents, currentOption : currOpt,  currentIntents : currIntent }})
  }

  return (
    <motion.div className="HelpPage" 
    initial={animationConstants.containerDropIn.initial}
    animate={animationConstants.containerDropIn.animate}
    transition={animationConstants.containerDropIn.transition}
    >
      {/* Display help page title and styled text div for the content*/}
      <styledComponent.StyledTitle/>
      <styledComponent.StyledText>
        {/* Display the intro paragraph*/}
        <p>Welcome to the Natural Leaders United Transcript Analyzer! Here is a list of the things you can do with our services as well as some general tips to get started.</p>
        <p>Please ensure you have a chat-bot up and running and trained before you begin using our services. If you need assistance or guidance to do this, please visit the following link: {' '}
        <a href="https://www.voiceflow.com/tutorial" target="_blank" rel="noreferrer">
          Voiceflow Tutorial
        </a>
        </p>

        <p style={{marginBottom: 30}}>Now that you are all set up, here are the exciting features of this Transcript Analyzer,</p>
        <HelpText/>
      </styledComponent.StyledText>
 
      {/* Display button to return back to suggested prompts*/}
      <styledComponent.StyledDiv classname="Help-col">
        <HoverButtonClick clickFunction={redirectToMainPage} text={"Back to Suggested Prompts"} theme={"blue"}/>
      </styledComponent.StyledDiv>
    </motion.div>
  );
};
 
export default HelpPage;
 

