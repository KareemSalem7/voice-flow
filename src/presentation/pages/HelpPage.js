import '../styles/HelpPage.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {Button} from '../styles/styledComponents/StyledPrompt.js';
import styled from "styled-components";
import React from "react";
import { motion } from 'framer-motion';
 
// define easing for animation
let easing = [0.6, -0.05, 0.01, 0.99];

//set styled attributes of div surronding text
const StyledDiv = styled.div`
    padding-top: 10px;
    padding-left: 20px;
    text-align: center;
    color: ${(props) => props.color};
`;
 
//set styled attributes of text including sentences: p, and dot jots: dot
const StyledText = styled.div`
    padding-left: 20px;
    text-align: left;
    margin-left: 70px;
    margin-right: 70px;
    color: ${(props) => props.color};
 
    p {
        text-align: left;
    }
 
    dot {
      text-align: left;
      float: left;
      margin-left: 40px;
  }
`;
 
// define structure and css attributes for the title 
const StyledTitle = () => (    
  <StyledDiv style={{fontSize: 40, fontWeight: 'bold', marginTop: 30}}>
      <p> Further Into Prompt Suggester </p>
  </StyledDiv>
);
 
// define animation and structure of the help page
function HelpPage(){
  return (
    <motion.div className="App" initial={{ opacity: 0, height: 0}}
    animate={{ opacity: 1, height: "100vh"}}
    transition={{ duration: 1, ease: easing }}>
      {/* Display help page title and styled text div for the content*/}
      <StyledTitle/>
      <StyledText>
        {/* Display the intro paragraph*/}
        <p>Welcome to the Natural Leaders United Transcript Analyzer! Here is a list of the things you can do with our services as well as some general tips to get started.</p>
        <p>Please ensure you have a chat-bot up and running and trained before you begin using our services. If you need assistance or guidance to do this, please visit the following link: {' '}
        <a href="https://www.voiceflow.com/tutorial" target="_blank" rel="noreferrer">
          Voiceflow Tutorial
        </a>
        </p>

        <p style={{marginBottom: 30}}>Now that you are all set up, here are the exciting features of this Transcript Analyzer,</p>
 
        {/* Display the paragraph for explaining how prompt suggester develops best first prompts*/}
        <div className="Help-row">
          <p style={{margin: 0}}>Analyzing My Chatbot’s Transcripts to Find the Best First Chatbot Message:</p>
          <dot>1. First, please enter your voiceflow API key and version ID into the appropriate fields, so we can locate your chatbot. </dot>
          <dot>2. Voiceflow will automatically compile transcripts from it's database and determine best first prompts curated to your situation. </dot>
          <dot style={{marginBottom: 30}}>3. Now press the button below entitled “Submit Now! to find out what the best first prompt would be for your chatbot for you and your customer’s needs. </dot>
        </div>
 
        {/* Display the paragraph for explaining how prompt suggester implements your selected prompt*/}
        <div className="Help-row">
          <p style={{margin: 0}}>Adding My Optimized First ChatBot Prompt to My Voiceflow Canvas: </p>
          <dot>1. Tab over options shown on the left side to view and select one of three suggested first prompts </dot>
          <dot>2. Now click the button entitled “Add My Optimized First Block”. </dot>
          <dot>3. Return to your voiceflow canvas to see your optimized first message and continue to perfect your chatbot from there. </dot>
        </div>
      </StyledText>
 
      {/* Display button to return back to suggested prompts*/}
      <StyledDiv classname="Help-col">
        <Link to="/mainpage">
          <motion.div whileHover={{scale: 1.2}}>
              <Button style={{marginBottom: 30}}>
                Back to suggested prompts
              </Button>
            </motion.div>
        </Link>
      </StyledDiv>
    </motion.div>
  );
};
 
export default HelpPage;
 

