import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import React, {useState} from "react";
import styled from 'styled-components';
import vfLogo from './images/voiceflowLogo.png'

var types = ['Profitability', 'Customer Satisfaction', 'General'];

const StyledDiv = styled.div`
    background-color: #11172b;
    display: left;
    padding: 20px;
    flex-direction: column;
    
    color: ${(props) => props.color};

    p {
        font-size: 30px;
        color: white;
    }
`;

// different color themes we can set our buttons to
const theme = {
    blue: {
        default: '#3c6cd7',
        hover: '#3460c4'
    },
    white: {
        default: '#808080',
        hover: '#3c6cd7'
    }
}

//Set css attributes for a button including hover which makes it tinted and disabled (opaque look)
export const Button = styled.button`
    background-color: ${props => theme[props.theme].default};
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    font-size: 20px;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
        background-color: ${props => theme[props.theme].hover};
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;

// Set the default look of a button to blue theme
Button.defaultProps = {
    theme: "blue"
};

// Update the sendActive prompt after tab has been changed
function updateActivePrompt(prompt){
    sendActive = prompt; 
}

// Set a default list of prompts tbd: update these to be based on back-end
// const types = ['Prompt A', 'Prompt B', 'Prompt C'];
export var sendActive = "Prompt A";
// Keeps track of old prompt to be changed with tab changes
var oldActive = "Prompt A";

// Set css attributes of styled tab, changes look when it is active
const Tab = styled.button`
    display: flex;
    color: white;
    padding: 20px 30px;
    cursor: pointer;y
    opacity: 0.6;
    background: #11172b;
    border: 0;
    outline: 0;
    border-bottom: 2px solid transparent;
    transition: ease border-bottom 250ms;
    font-size: 20px;
    
    ${({ active }) =>
        active &&
        `
        border-bottom:2px solid white;
        opacity: 1;
    `}
`;

// Switch tab functionality that allows user to tab between different 
function TabGroup(){
    const [active, setActive] = useState(types[0]);
    // limits updateActivePrompt to be called only once when the active tab is changed
    if(oldActive !== active){
        oldActive = active;
        updateActivePrompt(active);
    } 
    return (
        <>
            <p
                style={{
                    display: 'flex',
                    alignItems: 'left',
                    justifyContent: 'left',
                    fontSize: 20,
                    flexWrap: 'wrap',
                    marginTop: 30

                }}> 
                Your Best First Prompts:
            </p>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',                
                    alignItems: 'left',
                    justifyContent: 'left',

              }}
            >
                {types.map(type => (
                    <Tab
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                    >
                        {type}
                    </Tab>
                ))}
            </div>
            

        </>
    );
}

export default function App(){
    return (
        <>
        <StyledDiv>
            <td><img style={{ width: 182.75, height: 52.25}} src={vfLogo} className="voiceflow-logo" alt="vf-logo" /></td>
            <TabGroup/>

            <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',                
                    alignItems: 'left',
                    justifyContent: 'left',
                    marginTop: 30}}>
            
            <Link to="/helppage">
                <Button theme="white">
                    Help & Support
                </Button>
            </Link>

            <Link to="/uploadpage">
                <Button theme="white">
                    Reupload Info
                </Button>
            </Link>

            </div>
            
        </StyledDiv>

        </>
    );
}
