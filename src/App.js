import logo from './logo.svg';
import './App.css';

function clickMe(){ 
  var jsonData = {
    "users": [
        {
            "intent": "Kareem", 
            "content": "A cool intent and prompt"
        }
    ]
  }
  alert('click 1 detected')
  // Send data to the backend via POST
  fetch('http://localhost:8080/api/v1/transcripts/create', {  // Enter your IP address here
    method: 'POST',  
    body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
  })
  console.log(jsonData);
}

function clickMeTwo(){
  var jsonData = {
    "users": [
        {
          "intent": "Martin", 
          "Content": "A cool intent and prompt"
        }
    ]
  }
  alert('click 2 detected')
  // Send data to the backend via POST
  fetch('http://localhost:8080/api/v1/transcripts/create', {  // Enter your IP address here
    method: 'POST',  
    body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
  })
  console.log(jsonData);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Suggested Prompt A: Some prompt      
          <button className="btn" onClick={clickMe}>Prompt 1</button>
          <br></br>
          Suggested Prompt B: Some other prompt
        <button className="btn" onClick={clickMeTwo}>Prompt 2</button>
        </p>
        
      </header>
    </div>
  );

}

export default App;
