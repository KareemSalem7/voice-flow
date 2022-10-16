//i'm using yarn with this test
//i've also used http-proxy-middleware https://medium.com/bb-tutorials-and-thoughts/react-how-to-proxy-to-backend-server-5588a9e0347 

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentTime, setCurrentTime] = useState(0);

  

  // currentTime is an updatable variable. setCurrentTime is a function, and setCurrentTime(x) changes the value of currentTime to x. 
  // The number inside the brackets of useState is the default value of currentTime.
  

  //does this do two requests??? must be a useEffect thing.
  // useEffect is called when the file is compiled immediately
  useEffect(() => {
    fetch(`/time`, {method: "GET"}).then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);


  //function that calls get request!!!! gets time from backend live. react display is updated to display the new time!
  function updateTime() {

    // backticks are important. but do be consistent with single and double quotes across your files
    fetch(`/time`, {method: "GET"}).then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });

  }

  // send text data to the backend
  function sendMessage() {

    //store the text from the textbox down below
    var messageText = document.getElementById("textbox1").value;

    // fetch(`/textData`, {method: "POST", body:JSON.stringify({"text data": messageText})}).then(response => {
      // return response.json()}).then(json => )

    //set the textbox to empty
    document.getElementById("textbox1").value = "";

  }
    
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div onClick={updateTime} style={{
          textAlign: 'center',
          width: '1000px',
          border: '1px solid gray',
          borderRadius: '5px'
        }}>
          UpdateTime
        </div>
        
        <p>The current time is {currentTime}.</p>

        <p> Enter text below. </p>

        {/* A name is required for the text box. If it does not have one, its entry will not be submitted 
        (i don't know what this means for my purposes; i'm not using a submit button anymore)*/}
        <input type = "user" maxLength="8" id = "textbox1" name = "textdata"></input>

        <button id = "button1" onClick={sendMessage}> Send text data to backend. </button>
      </header>
    </div>
  );
}

export default App;
