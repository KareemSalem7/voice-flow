// DONT remove router, route, and routes, ignore warning this is needed
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {Button} from './StyledPrompt';
import styled from "styled-components";

const StyledText = () => (    
  <StyledDiv>
      <p> Further Into Prompt Suggester </p>
  </StyledDiv>
);

const StyledDiv = styled.div`
    padding-top: 1px;
    padding-left: 20px;
    text-align: center;
    color: ${(props) => props.color};

    p {
        font-size: 30px;
        text-align: center;
    }
`;

function HelpPage(){
  return (
    <div>
        <StyledText/>
        <p>
        Welcome to the Natural Leaders United Transcript Analyzer! Here is a list of the things you can do with our services as well as some general tips to get started.
        Please ensure you have a chat-bot up and running and trained before you begin using our services. If you need assistance or guidance to do this, please visit the following link: https://www.voiceflow.com/tutorial. 
        </p>
        <Link to="/mainpage">
            <Button>
                <p>Back to suggestions</p>
            </Button>
        </Link>
    </div>
  );
};

export default HelpPage;
