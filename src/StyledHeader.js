import React from "react";
import vfLogo from './images/voiceflowLogo.png'
import styled from "styled-components";
import StyledPrompt from "./StyledPrompt";

const StyledDiv = styled.div`
    background-color: #11172b;
    padding: 20px;
    
    color: ${(props) => props.color};

    p {
        font-size: 30px;
        color: white;
    }
`;

const StyledHeader = () => (
    <StyledDiv>
        
            
            <td><img style={{ width: 182.75, height: 52.25}} src={vfLogo} className="voiceflow-logo" alt="vf-logo" /></td>
    
            
        

        
    </StyledDiv>
);

export default StyledHeader;