import '../styles/styleSheets/css//MainPage.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import React, {useState} from "react";
import TabGroup, { activeTab} from "../styles/styledComponents/StyledHeader.js";
import * as animationConstants from "../styles/framerMotionComponents/AnimationConstants.js";
import {StyledRect} from "../styles/styledComponents/StyledRect.js";
import { motion } from 'framer-motion';
import { SidebarDots } from '../styles/framerMotionComponents/AnimatedComponents';
import { HoverButtonClick } from '../styles/framerMotionComponents/HoverButton';

// // send some json data to the backend, using the text in the textbox with id textbox2 as the content
// // eslint-disable-next-line
// function sendTranscriptData() {

//   //for debugging
//   alert('transcript data sent');

//   //retrieve the text content from the proper textbox.
//   var contentBody = document.getElementById("textbox2").value;
//   var userIntent = document.getElementById("textbox4").value;

//   //the json data sent to the backend
//   //JSON.stringify is required for fetch
//   const fullEntry = JSON.stringify({
//     //if i don't provide an id, mongo will create one called Object(...). IDs have to be unique!
//     //id: "15", //constant id
//     //id: transcriptOutput, //variable id
//     intent: userIntent,
//     content: contentBody,
//     //???????
//     //prompt: activeTab,
//   });

//   //the type of data sent
//   const headerData = {
//     Accept: "application/json",
//     "Content-Type": "application/json;charset=UTF-8",
//   }

//   //create the fetch request
//   fetch(`http://localhost:8080/api/v1/transcripts/create`, {method: "POST", headers: headerData, body: fullEntry})
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

//   //empty the textbox
//   document.getElementById("textbox2").value = "";
//   document.getElementById("textbox4").value = "";

//   // testing:
//   //test variable incrememntation
//   //setTranscriptOutput(transcriptOutput + 1);
//   //transcriptOutput = transcriptOutput + 1;
// }

// function getPrompts(){
//   //create the fetch request
//   fetch(`http://localhost:8080/api/v1/transcripts/getBestIntents`, {method: "GET", headers: headerData, body: fullEntry})
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// }

/* define main page function 
Page responsible for displaying the 3 prompt choices and allowing user to flip through and select one
Also provides option to view help page and reupload info

*/
function MainPage(){
  // set updatePrompt to react hook function useUpdatePrompt()
  const updatePrompt = useUpdatePrompt();
  // we define the seperate updatePrompt const and updatePromptScreen function as a work around to call react hook function here
  const updatePromptScreen = () => {
    updatePrompt();
  }
  
  //send alert to inform user of confirmed choice when confirm button is pressed
  function confirmChoice(){ 
    alert(activeTab + " Selected!");
  }
  
  //react hook function to update the selected prompt rectangle on the view
  function useUpdatePrompt(){
    // eslint-disable-next-line
    const [value, setValue] = useState(0); // set current integer state
    return () => setValue(value => value + 1); // update state to force render
    // increment the previous state to update the view 
  }
  return (
    <>
      <motion.div className="container-fluid-main"
          initial={animationConstants.containerDropIn.initial}
          animate={animationConstants.containerDropIn.animate}
          transition={animationConstants.containerDropIn.transition}
          >
        {/* Seperates the left header and prompt rectangle sections side by side */}
        <div className="MainPage-col">
          {/* Define left side with the dots and tabs side by side */}
          <div className="MainPage-left-header">
            <SidebarDots i={3}/>
            <TabGroup updatePromptScreen={updatePromptScreen}/>
          </div>

          {/* Define the right side with rectangle containing chosen prompt */}
          <div className="MainPage-right-content">
            {/* Display rectangle that displays the chosen prompt */}
            <StyledRect/>
            {/* Define button to confirm choice */}
            <HoverButtonClick clickFunction={confirmChoice} link={"/endpage"} text={"Add My Optimized First Block!"}/>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MainPage;
