/*
Javascript file meant for handling fetch requests to the backend.


Created by Martin Calcaterra on Wednesday November 16th, 2022
*/
// for base 64 encodings. needs buffer installed
import {Buffer} from 'buffer';


//the type of data sent
//pretty sure that putting this here allows it to be accessed by both functions below
//check if this is good coding practice, using a "global" variable i think.
const headerData = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8"  
}



export async function getBestIntents(){

  // retrieve the apiKey and versionID from their respective textboxes
  var submittedApiKey = document.getElementById("apiKey").value;
  var submittedApiVersion = document.getElementById("versionID").value;


  // we need to encode the api key and version to make sure they are written in characters that can be sent across HTTP
  var encodedInfo = Buffer.from(submittedApiKey + ":" + submittedApiVersion).toString('base64');

  // these are the headers that will be sent with the HTTP request.
  // Authorization is a special header with a special format for sending username and password data.
  //    - here it is being used for the API information, but good enough for now
  const authHeaderData = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: "Basic " + encodedInfo,
    "Access-Control-Allow-Origin": "*"
  }


  //create the fetch request
  //call the backend controller that generates the best intents
  var intents = await
  fetch(`http://localhost:8080/api/v1/transcripts/threeIntents/api`, {method: "GET", headers: authHeaderData})
  //fetch(`http://nlubackend-env.eba-ekvzpwbj.us-east-1.elasticbeanstalk.com/api/v1/transcripts/threeIntents/api`, {method: "GET", headers: authHeaderData})
  .then((response) => response.json())
  .then((data) => {
    //intents = data;
    console.log(data);
    return data;
  });

  // more debugging, shows that intents has a promise, which is the return above.
  console.log(intents);


  // still have to handle bad data here, or in the backend at least. Whatever is cleaner

  //for now, make a dict with keys like Option A, etc.
  var newIntents = {"General Prompts": intents[0], "Leaf Node Prompts": intents[1]};

  // empty the input text boxes for the apiKey and versionID
  document.getElementById("apiKey").value = "";
  document.getElementById("versionID").value = "";

  // return the intents!
  return newIntents;
}


export function sendAccount() {
  //for debugging
  //alert('api sent');
  //console.log('api sent???');

  //retrieve the text content from the corresponding textbox.
  var submittedAddress = document.getElementById("emailAddress").value;
  var submittedPassword = document.getElementById("password").value;
  var submittedDiagramID = document.getElementById("diagramID").value;

  //alert(submittedApiKey + ', '+ submittedApiVersion);

  //the json data sent to the backend
  //JSON.stringify is required for fetch
  const fullEntry = JSON.stringify({
    //if i don't provide an id, mongo will create one called Object(...). IDs have to be unique!
    //id: "15", //constant id
    //id: transcriptOutput, //variable id
    emailAddress: submittedAddress,
    password: submittedPassword,
    diagramID: submittedDiagramID,
    //???????
    //prompt: activeTab,
  });

  //create the fetch request
  fetch(`http://localhost:8080/api/v1/transcripts/storeAccount`, {method: "POST", headers: headerData, body: fullEntry})
  //fetch(`http://nlubackend-env.eba-ekvzpwbj.us-east-1.elasticbeanstalk.com/api/v1/transcripts/storeAccount`, {method: "POST", headers: headerData, body: fullEntry})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

  //empty the textboxes (maybe only do this if the submission fails do to an error or no transcripts or something else?)
  document.getElementById("emailAddress").value = "";
  document.getElementById("password").value = "";
  document.getElementById("diagramID").value = "";
}


// create a new block on voiceflow by calling the backend. consider moving this elsewhere
export function createVFBlock(intents){
  const submittedAddress = document.getElementById("emailAddress").value;
  const submittedPassword = document.getElementById("password").value;
  const submittedDiagramID = document.getElementById("diagramID").value;
  console.log(submittedAddress)
  console.log(submittedPassword)
  console.log(submittedDiagramID)
  // note: for the entry here, I am currently giving the names of the variables in the body the same key names as those
  // in the corresponding backend controller used to generate and pass in objects. i.e. intent1 is for String intent1, and 
  // emailAddress is for setting the emailAddress instance attribute of Account account
  // Currently, i am also preserving the order of entries, too
  const fullEntry = JSON.stringify({
    emailAddress: submittedAddress,
    password: submittedPassword,
    diagramID: submittedDiagramID,
    intent1: intents[0],
    intent2: intents[1],
    intent3: intents[2]
  });


  //create the fetch request
  fetch(`http://localhost:8080/api/v1/transcripts/createBlock`, {method: "POST", headers: headerData, body: fullEntry})
  //fetch(`http://nlubackend-env.eba-ekvzpwbj.us-east-1.elasticbeanstalk.com/api/v1/transcripts/createBlock`, {method: "POST", headers: headerData, body: fullEntry})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

}
