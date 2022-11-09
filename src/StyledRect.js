import React, {useState} from "react";
import styled from 'styled-components';
import {chosenPrompt, prompts, sendActive} from './StyledPrompt'

export function updatePrompt(prompt){
    chosenPrompt = prompts[sendActive];
}


const StyledDiv = styled.div`
    background-color: #dee4ea;
    padding: 20px;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0 0 0 5px  white, 
                0 0 0 10px #dee4ea;
    
    color: ${(props) => props.color};
`;

const StyledDiv2 = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    
    color: ${(props) => props.color};
`;

const outterTextStyle = {
    color: '#6c7c91',
    fontSize: 40,
    margin: 50
};

const innerTextStyle = {
    color: '#6c7c91',
    fontSize: 30,
    marginTop: 30
};


const StyledRect = () => (
    <StyledDiv className="container" style={outterTextStyle}>
        <div style={{fontWeight: 'bold'}}>New Block 1</div>
        <StyledDiv2 className="container" style={innerTextStyle}>
            
            { chosenPrompt }
        </StyledDiv2>
    </StyledDiv>
);
 
export default StyledRect;
