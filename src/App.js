import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function clickMe(){ 
  const jsonData = 
  {
    "intent": "Kareem Salem", 
    "content": "A cool intent and prompt"
  }
  alert('click 1 detected')
  // Send data to the backend via POST
  // axios for the request
  axios.post('http://localhost:8080/api/v1/transcripts/create', jsonData)
        .then(response => this.setState({ dataId: response.data.id }));
  console.log(jsonData);
}

function clickMeTwo(){
  const jsonData = 
  {
    "intent": "Martin", 
    "content": "A cool intent and prompt"
  }
  alert('click 2 detected')
  // Send data to the backend via POST
  axios.post('http://localhost:8080/api/v1/transcripts/create', jsonData)
        .then(response => this.setState({ dataId: response.data.id }));
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
