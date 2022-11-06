// DONT remove router, route, and routes, ignore warning this is needed
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {Button} from './StyledPrompt';
import styled from "styled-components";

const StyledText = () => (    
  <StyledDiv>
      <p> Voiceflow Prompt Suggester </p>
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

function EnablePage(){
  return (
    <div>
      <StyledText/>
        <Link to="/uploadpage">
            <Button>
                <p>Open Prompt Suggestions</p>
            </Button>
        </Link>
    </div>
  );
};

export default EnablePage;
