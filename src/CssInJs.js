import React from "react";
import vfLogo from './images/voiceflowLogo.png'
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: whitesmoke;
    display:center;
    justify-content: space-between;
    padding-left: 20px;
    border: 1px solid black;
    color: ${(props) => props.color};

    p {
        font-size: 28px;
    }
`;

const CssInJs = () => (
    <StyledDiv color="dark navy">
        <p> Prompt Suggestion Hub </p>
        
        <img style={{ width: 100, height: 26 }} src={vfLogo} className="voiceflow-logo" alt="vf-logo" />
    </StyledDiv>
);

export default CssInJs;