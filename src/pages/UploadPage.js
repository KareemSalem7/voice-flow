// eslint-disable-next-line
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {Button} from '../styledComponents/StyledPrompt.js';
import styled from "styled-components";

const StyledText = () => (    
  <StyledDiv>
      <p> Enter Your Information </p>
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

function UploadPage(){
  return (
    <div>
      <StyledText/>
      <Link to="/mainpage">
          <Button>
              <p>Generate Prompts</p>
          </Button>
      </Link>
    </div>
  );
};

export default UploadPage;
