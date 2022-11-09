// DONT remove router, route, and routes, ignore warning this is needed
import './HelpPage.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {Button} from './StyledPrompt';
import styled from "styled-components";

const StyledTitle = () => (    
  <StyledDiv style={{fontSize: 40, fontWeight: 'bold'}}>
      <p> Further Into Prompt Suggester </p>
  </StyledDiv>
);

const StyledDiv = styled.div`
    padding-top: 10px;
    padding-left: 20px;
    text-align: center;
    color: ${(props) => props.color};
`;

const StyledText = styled.div`
    padding-top: 1px;
    padding-left: 20px;
    text-align: left;
    margin: 10px;
    color: ${(props) => props.color};

    p {
        font-size: 30px;
        text-align: center;
    }
`;

function HelpPage(){
  return (
    <div className="App">
        <StyledTitle/>
        <StyledText>
        Welcome to the Natural Leaders United Transcript Analyzer! Here is a list of the things you can do with our services as well as some general tips to get started.
        Please ensure you have a chat-bot up and running and trained before you begin using our services. If you need assistance or guidance to do this, please visit the following link:  
        <a href="https://www.voiceflow.com/tutorial" target="_blank">
          <p>Voiceflow Tutorial</p> 
        </a>
        Now that you are all set up, here are the exciting features of this Transcript Analyzer. Analyzing My Chatbot’s Transcripts to Find the Best First Chatbot Message:
        Analyzing My Chatbot’s Transcripts to Find the Best First Chatbot Message:
        First, please enter your voiceflow API key and version ID into the appropriate fields, so we can locate your chatbot.
        Now you can select out of choices Prompt A, B, or C on the left side for what you would like based on your objective.
        Lastly, once you can confirm your choice by clicking the button entitled “Add My Optimized First Block”.
        Return to your voiceflow canvas to see your optimized first message and continue to perfect your chatbot from there.

        Thank you for using our service. We are eager to work on your next project with you!
        </StyledText>
        <StyledDiv>
        <Link to="/mainpage">
            <Button>
                <p>Back to suggestions</p>
            </Button>
        </Link>
        </StyledDiv>
    </div>
  );
};

export default HelpPage;
