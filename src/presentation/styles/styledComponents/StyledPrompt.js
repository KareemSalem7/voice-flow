// eslint-disable-next-line
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import vfLogo from '../../assets/voiceflowLogo.png'
import NLUlogo from '../../assets/NLULogoTransparent.png';
import { motion } from 'framer-motion';

// Defining reference constants for animation of various components (to ensure style & motion consistency)
let easing = [0.6, -0.05, 0.01, 0.99];
const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

// Have multiple grouped animated elements appear at slightly offset times.
const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    }
  }
};

export var types = ['Option A', 'Option B', 'Option C'];
export var prompts = {'Option A': 'Would you like to see the new sale on Mongolian fishing boots?', 
'Option B': 'The Fishing Boots your looking for can be found under shoes', 
'Option C': 'Would you like to get to extend your plan or switch plans?'};

const StyledDiv = styled.div`
    background-color: #1fc8db;
    background-image: linear-gradient(180deg, #5784e4 0%, #633366 50%, #3f1243 75%);
    display: left;
    padding: 20px;
    flex-direction: column;
    height: 100vh;
    
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
    border: none;
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

// Set a default list of prompts tbd: update these to be based on back-end
export var sendActive = "Option A";
export var chosenPrompt = "Would you like to see the new sale on Mongolian fishing boots?";
// Keeps track of old prompt to be changed with tab changes
var oldActive = "Option A";

// Set css attributes of styled tab, changes look when it is active
const Tab = styled.button`
    display: flex;
    color: white;
    padding: 20px 30px;
    cursor: pointer;y
    opacity: 0.6;
    background: transparent;
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
function TabGroup({updatePromptScreen}){
    const [active, setActive] = useState(types[0]);
    
    // limits updateActivePrompt to be called only once when the active tab is changed
    useEffect(()=>{
        if(oldActive !== active){
            oldActive = active;
            updateActivePrompt(active);
        } 

    },[active])

    function updateActivePrompt(prompt){
        sendActive = prompt; 
        chosenPrompt = prompts[sendActive];
        updatePromptScreen();
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
                    alignItems: 'center',
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

export default function App({updatePromptScreen}){
    return (
        <>
        <StyledDiv>
            <td><img style={{ width: 182.75, height: 52.25}} src={vfLogo} className="voiceflow-logo" alt="vf-logo" /></td>
            <TabGroup updatePromptScreen={updatePromptScreen}/>

            <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',                
                    alignItems: 'center',
                    justifyContent: 'left',
                    marginTop: 30}}>
            
            <Link to="/helppage">
                <motion.div whileHover={{scale: 1.2}}>
                    <Button theme="white">
                        Help & Support
                    </Button>
                </motion.div>
            </Link>
            
            <Link to="/uploadpage">
                <motion.div whileHover={{scale: 1.2}}>
                    <Button theme="white">
                        Reupload Info
                    </Button>
                </motion.div>
            </Link>
            
            </div>

            <td><img style={{ width: 200, height: 200, marginTop: 30}} src={NLUlogo} className="NLU-logo" alt="NLU-logo" /></td>
        
        </StyledDiv>
        </>
    );
}
