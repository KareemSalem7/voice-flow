// eslint-disable-next-line
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
// import React, { useState, useEffect } from "react";
import vfLogo from '../../assets/voiceflowLogo.png'
import NLUlogo from '../../assets/NLULogoTransparent.png';
import { HoverButtonNoClick } from '../framerMotionComponents/HoverButton';
import { Tab, StyledDiv } from './StyledConstants';

import { tabNames } from '../../pages/MainPage.js';

//This is the type of the voiceflow blocks
//let tabNames = ["Option A", "Option B"];


// Switch tab functionality that allows user to tab between different 
function TabGroup({ updateScreen }) {
    const location = useLocation();
    const bestIntents = location.state?.bestIntents; // The data passed from UploadPage!

    function changeTab(tabName) {
        // if the tab that was clicked on is not the currently selected tab
        // syntax note: == and != convert variables to the same type before comparing. === and !== do not.
        if (location.state.currentOption !== tabName) {

            // update the current tab to the tab that was clicked on
            location.state.currentOption = tabName; 
            // update the corresponding selected intents
            location.state.currentIntents = bestIntents[tabName];
            // re-render the screen
            updateScreen();
        }

        // otherwise, don't change the tab. You clicked on the tab that is already selected!
        // side note: this works as intended. would be nice to formally test this in a suite
    };

    // define the css tabs components including message and each tab
    // tabs uses setActive react hook function that updates the active tab to the one clicked on 
    return (
        <>
            {/* Define css attributes of text above tabs*/}
            <p
                style={{
                    display: 'flex',
                    alignItems: 'left',
                    justifyContent: 'left',
                    fontSize: 25,
                    flexWrap: 'wrap',
                    marginTop: 30

                }}>
                Your Best First Prompts:
            </p>

            {/* Define css attributes of tabs*/}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'left',

                }}
            >
                {/* Define active tab functionality using onClick to set the active tab be the one selected from the list of types*/}
                {tabNames.map(tabName => (
                    <Tab
                        // here, each tab is mapped to a name in tabNames
                        key={tabName}
                        // if this tab is the current tab, give it the appearance of being active/clicked on
                        active={location.state.currentOption === tabName}
                        // when this tab is clicked on, change the current tab
                        onClick={() => {changeTab(tabName);}}
                    >
                        {/* Display the tab's name on the tab itself */}
                        {tabName}
                    </Tab>

                ))}
            </div>
        </>
    );
}


// Define the css structure of the left header
// Has the logo, tabGroup with tabs, buttons for help and upload pages, and NLU logo at the bottom
export default function App({ updateScreen }) {
    return (
        <>
            {/* Define css structure of header containing tabs, buttons, and logos */}
            <StyledDiv>
                {/* Display voiceflow logo */}
                <td><img style={{ width: 182.75, height: 52.25 }} src={vfLogo} className="voiceflow-logo" alt="vf-logo" /></td>

                {/* Display tabgroup and send updateScreen function as argument to update chosen prompt whenever tab is selected */}
                <TabGroup updateScreen={updateScreen} />

                {/* Define css attributes for div for help and reupload buttons and NLU logo */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 30
                }}>

                    {/* Display button that takes you back to help page */}
                    <HoverButtonNoClick link={"/helppage"} text={"Help & Support"}  data-testid="help-button"/>

                    {/* Display button that takes you back to upload page */}
                    <HoverButtonNoClick link={"/uploadpage"} text={"Reupload Info"} data-testid="upload-button"/>

                    {/* Display NLU logo */}
                    <img style={{ width: 200, height: 200, marginTop: 30 }} src={NLUlogo} className="NLU-logo" alt="NLU-logo" />
                </div>
            </StyledDiv>
        </>
    );
}