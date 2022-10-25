import vfLogo from './images/voiceflowLogo.png'
import './App.css';
import axios from 'axios';
import CssModules from "./CssModules";

function clickMe(){ 
  const jsonData = 
  {
    "intent": "Kareem", 
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
    <div>
      <div className="App">
        <header className="App-header">
        <img src={vfLogo} className="voiceflow-logo" alt="vf-logo" />
          <p>
            Suggested Prompt A: Some prompt      
            <button className="btn" onClick={clickMe}>Prompt 1</button>
            <br></br>
            Suggested Prompt B: Some other prompt
          <button className="btn" onClick={clickMeTwo}>Prompt 2</button>
          </p>
          <CssModules/>
        </header>
      </div>
    </div>
  );
}

export default App;
