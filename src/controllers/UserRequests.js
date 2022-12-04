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
    Authorization: "Basic " + encodedInfo
  }


  //create the fetch request
  //call the backend controller that generates the best intents
  var intents = await
  fetch(`http://localhost:8080/api/v1/transcripts/threeIntents/api`, {method: "GET", headers: authHeaderData})
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
  var newIntents = {"Option A": intents[0], "Option B": intents[1]};

  // empty the input text boxes for the apiKey and versionID
  document.getElementById("apiKey").value = "";
  document.getElementById("versionID").value = "";

  // return the intents!
  return newIntents;
}