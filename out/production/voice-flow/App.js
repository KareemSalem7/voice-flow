import logo from './logo.svg';
import './App.css';

function clickMe(){
  var jsonData = {
    "users": [
        {
            "name": "Kareem", 
            "age": 19,
            "username": "KareemSalem7"
        }
    ]
  }
  alert('click 1 detected')
  // Send data to the backend via POST
  fetch(`http://localhost:5040/`, {  // Enter your IP address here
    method: 'POST', 
    mode: 'cors', 
    body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
  })
}

function clickMeTwo(){
  var jsonData = {
    "users": [
        {
            "name": "Martin", 
            "age": 19,
            "username": "ToastMan"
        }
    ]
  }
  alert('click 2 detected')
  // Send data to the backend via POST
  fetch(`http://localhost:5040/`, {  // Enter your IP address here
  method: 'POST', 
  mode: 'cors', 
  body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
})
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
