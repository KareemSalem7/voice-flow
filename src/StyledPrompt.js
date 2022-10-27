import React, {useState} from "react";
import styled from 'styled-components';

// different color themes we can set our buttons to
const theme = {
    blue: {
        default: '#000080',
        hover: '#283593'
    },
    pink :{
        default: '#e91e63',
        hover: '#ad1457'
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
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
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
const types = ['Prompt A', 'Prompt B', 'Prompt C'];
export var sendActive = "Prompt A";
// Keeps track of old prompt to be changed with tab changes
var oldActive = "Prompt A";

// Set css attributes of styled tab, changes look when it is active
const Tab = styled.button`
    padding: 10px 60px;
    cursor: pointer;y
    opacity: 0.6;
    background: white;
    border: 0;
    outline: 0;
    font-size: 50px;
    
    ${({ active }) =>
        active &&
        `
        border-bottom:2px solid black;
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
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
            
            <p
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 30
                }}> 
                Your prompt selection is: {active} 
            </p>
        </>
    );
}
  

export default function App(){
    return (
        <>
        <TabGroup/>
        </>
    );
}
