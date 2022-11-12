import '../styles/HelpPage.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {Button} from '../styles/styledComponents/StyledPrompt.js';
import styled from "styled-components";
import React from "react";
 
//set styled attributes of div surronding text
const StyledDiv = styled.div`
    padding-top: 10px;
    padding-left: 20px;
    text-align: center;
    color: ${(props) => props.color};
`;
 
//set styled attributes of text including sentences: p and dot jots: dot
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
 
const StyledTitle = () => (    
  <StyledDiv style={{fontSize: 40, fontWeight: 'bold', marginTop: 30}}>
      <p> Further Into Prompt Suggester </p>
  </StyledDiv>
);
 
function HelpPage(){
  return (
    <div className="App">
        <StyledTitle/>
        <StyledText>
        <p>Welcome to the Natural Leaders United Transcript Analyzer! Here is a list of the things you can do with our services as well as some general tips to get started.</p>
        <p>Please ensure you have a chat-bot up and running and trained before you begin using our services. If you need assistance or guidance to do this, please visit the following link: {' '}
        <a href="https://www.voiceflow.com/tutorial" target="_blank" rel="noreferrer">
          Voiceflow Tutorial
        </a>
        </p>
       
        <p style={{marginBottom: 30}}>Now that you are all set up, here are the exciting features of this Transcript Analyzer,</p>
 
        <div className="Help-row">
        <p style={{margin: 0}}>Analyzing My Chatbot’s Transcripts to Find the Best First Chatbot Message:</p>
        <dot>1. First, please enter your voiceflow API key and version ID into the appropriate fields, so we can locate your chatbot. </dot>
        <dot>2. Now select from the menu below the goal you most want this chatbot to accomplish with its first message (ex. Profitability, Good Customer Relations). </dot>
        <dot style={{marginBottom: 30}}>3. Now press the button below entitled “Analyze Transcripts” to find out what the best first prompt would be for your chatbot for you and your customer’s needs. </dot>
        </div>
 
        <div className="Help-row">
        <p style={{margin: 0}}>Adding My Optimized First ChatBot Prompt to My Voiceflow Canvas:</p>
        <dot>1. Note: To use this feature you must already have analyzed your chatbot’s transcripts for the best first prompt. </dot>
        <dot>2. Now click the button entitled “Add My Optimized First Block”. </dot>
        <dot>3. Return to your voiceflow canvas to see your optimized first message and continue to perfect your chatbot from there. </dot>
        </div>
        </StyledText>
 
        <StyledDiv classname="Help-col">
        <Link to="/mainpage">
            <Button style={{marginBottom: 30}}>
                Back to suggestions
            </Button>
        </Link>
        </StyledDiv>
    </div>
  );
};
 
export default HelpPage;
 

