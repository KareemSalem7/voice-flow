import React from "react";
import vfLogo from './images/voiceflowLogo.png'
import styled from "styled-components";
import HeaderPair from "./HeaderPair";

const StyledDiv = styled.div`
    background-color: whitesmoke;
    display:center;
    padding-left: 50px;
    border: 1px solid black;
    color: ${(props) => props.color};

    p {
        font-size: 30px;
    }
`;

const StyledHeader = () => (
    <StyledDiv color="dark navy">
        <p>Prompt Suggestion Hub</p>
        <React.Fragment>
            
            <td><img style={{ width: 150, height: 39, marginRight: 200}} src={vfLogo} className="voiceflow-logo" alt="vf-logo" /></td>
            
            <td><HeaderPair></HeaderPair></td>
            
        </React.Fragment>

        
    </StyledDiv>
);

export default StyledHeader;