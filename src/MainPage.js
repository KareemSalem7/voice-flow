import './MainPage.css';
import axios from 'axios';
import StyledText from "./StyledText";
import TabGroup from "./StyledPrompt";
import {Button, sendActive} from './StyledPrompt';

// send some json data to the backend, using the text in the textbox with id textbox2 as the content
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

function clickMe(){ 
  alert(sendActive);
}

function MainPage(){
  return (
    <>
      <div className="App-row">
        <TabGroup/>
        <div className="App-col">
          <header className="App-header">
            <Button onClick={clickMe}>Confirm Choice</Button>
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
