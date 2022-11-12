import '../styles/MainPage.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import React, {useState} from "react";
import TabGroup, {Button, sendActive} from "../styles/styledComponents/StyledPrompt.js";
import {StyledRect} from "../styles/styledComponents/StyledRect.js";

// send some json data to the backend, using the text in the textbox with id textbox2 as the content
// eslint-disable-next-line
function sendTranscriptData() {

  //for debugging
  alert('transcript data sent');

  //retrieve the text content from the proper textbox.
  var contentBody = document.getElementById("textbox2").value;
  var userIntent = document.getElementById("textbox4").value;

  //the json data sent to the backend
  //JSON.stringify is required for fetch
  const fullEntry = JSON.stringify({
    //if i don't provide an id, mongo will create one called Object(...). IDs have to be unique!
    //id: "15", //constant id
    //id: transcriptOutput, //variable id
    intent: userIntent,
    content: contentBody,
    //???????
    //prompt: sendActive,
  });

  //the type of data sent
  const headerData = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  }

  //create the fetch request
  fetch(`http://localhost:8080/api/v1/transcripts/create`, {method: "POST", headers: headerData, body: fullEntry})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

  //empty the textbox
  document.getElementById("textbox2").value = "";
  document.getElementById("textbox4").value = "";

  // testing:
  //test variable incrememntation
  //setTranscriptOutput(transcriptOutput + 1);
  //transcriptOutput = transcriptOutput + 1;
}

// function getPrompts(){
//   //create the fetch request
//   fetch(`http://localhost:8080/api/v1/transcripts/getBestIntents`, {method: "GET", headers: headerData, body: fullEntry})
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// }

function MainPage(){
  // set updatePrompt to react hook function useUpdatePrompt()
  const updatePrompt = useUpdatePrompt();
  const  updatePromptScreen = () => {
    updatePrompt()
  }
  
  //send alert to inform user of confirmed choice
  function confirmChoice(){ 
    alert(sendActive + " Selected!");
  }
  
  //react hook function to update the prompt selected on the view
  function useUpdatePrompt(){
    // eslint-disable-next-line
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // increment the previous state to update the view 
  }
  return (
    <>
      <div className="App-row">
        <TabGroup updatePromptScreen={updatePromptScreen}/>
        <div className="App-col">
          <header className="App-header">
            <StyledRect/>

            <Link to="/endpage">
            <Button style={{fontSize: 30}} onClick={confirmChoice}>Add My Optimized First Block</Button>
            </Link>
            
            {
              /*
              <input className="App-inputThing" type="text" maxLength="800" id="textbox2" placeholder="content body goes here"></input>

              <input className="App-inputThing" type="text" maxLength="800" id="textbox4" placeholder="Intent goes here"></input>

              <button className="App-inputThing" id="button2" onClick={sendTranscriptData}> Send transcript data to backend. </button>

              <button className="App-inputThing" id="button3" onClick={sendTranscriptData}> Get transcript data from backend. </button>

              <input className="App-inputThing" type="text" maxLength="800" id="textbox3" placeholder="output"></input>
              */
            }

          </header>
        </div>
      </div>
    </>
  );
};

export default MainPage;
