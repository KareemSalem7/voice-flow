/*
Javascript file meant for handling fetch requests to the backend.


Created by Martin Calcaterra on Wednesday November 16th, 2022
*/


//the type of data sent
//pretty sure that putting this here allows it to be accessed by both functions below
//check if this is good coding practice, using a "global" variable i think.
const headerData = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
}
export function sendUserInfo() {
  //for debugging
  //alert('api sent');
  //console.log('api sent???');

  //retrieve the text content from the corresponding textbox.
  var submittedApiKey = document.getElementById("apiKey").value;
  var submittedApiVersion = document.getElementById("versionID").value;
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
    apiKey: submittedApiKey,
    apiVersion: submittedApiVersion,
    emailAddress: submittedAddress,
    password: submittedPassword,
    diagramID: submittedDiagramID
    //???????
    //prompt: activeTab,
  });

  //create the fetch request
  fetch(`http://localhost:8080/api/v1/transcripts/storeUserInfo`, {method: "POST", headers: headerData, body: fullEntry})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

  //empty the textboxes (maybe only do this if the submission fails do to an error or no transcripts or something else?)
  document.getElementById("apiKey").value = "";
  document.getElementById("versionID").value = "";
  document.getElementById("emailAddress").value = "";
  document.getElementById("password").value = "";
  document.getElementById("diagramID").value = "";
}



// // since this is exported, is it as if it is defined inside the page it is imported? is that why i can get apiKey from the html
// // element? or is is just global????
// export function sendApi() {
//   //for debugging
//   //alert('api sent');
//   //console.log('api sent???');

//   //retrieve the text content from the corresponding textbox.
//   var submittedApiKey = document.getElementById("apiKey").value;
//   var submittedApiVersion = document.getElementById("versionID").value;

//   //alert(submittedApiKey + ', '+ submittedApiVersion);

//   //the json data sent to the backend
//   //JSON.stringify is required for fetch
//   const fullEntry = JSON.stringify({
//     //if i don't provide an id, mongo will create one called Object(...). IDs have to be unique!
//     //id: "15", //constant id
//     //id: transcriptOutput, //variable id
//     apiKey: submittedApiKey,
//     apiVersion: submittedApiVersion,
//     //???????
//     //prompt: activeTab,
//   });

//   //create the fetch request
//   fetch(`http://localhost:8080/api/v1/transcripts/storeAPI`, {method: "POST", headers: headerData, body: fullEntry})
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

//   //empty the textboxes (maybe only do this if the submission fails do to an error or no transcripts or something else?)
//   document.getElementById("apiKey").value = "";
//   document.getElementById("versionID").value = "";
// }

// export function sendAccount() {
//   //for debugging
//   //alert('api sent');
//   //console.log('api sent???');

//   //retrieve the text content from the corresponding textbox.
//   var submittedAddress = document.getElementById("emailAddress").value;
//   var submittedPassword = document.getElementById("password").value;
//   var submittedDiagramID = document.getElementById("diagramID").value;

//   //alert(submittedApiKey + ', '+ submittedApiVersion);

//   //the json data sent to the backend
//   //JSON.stringify is required for fetch
//   const fullEntry = JSON.stringify({
//     //if i don't provide an id, mongo will create one called Object(...). IDs have to be unique!
//     //id: "15", //constant id
//     //id: transcriptOutput, //variable id
//     emailAddress: submittedAddress,
//     password: submittedPassword,
//     diagramID: submittedDiagramID,
//     //???????
//     //prompt: activeTab,
//   });

//   //create the fetch request
//   fetch(`http://localhost:8080/api/v1/transcripts/storeAccount`, {method: "POST", headers: headerData, body: fullEntry})
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

//   //empty the textboxes (maybe only do this if the submission fails do to an error or no transcripts or something else?)
//   document.getElementById("emailAddress").value = "";
//   document.getElementById("password").value = "";
//   document.getElementById("diagramID").value = "";
// }

export async function getBestIntents(){

  // apparently this has to be initialized to a certain type, or else an error is caused.
  // this way, i can change the value in the .then below i think
  // scratch that, its just the .then scope is screwing up.
  var intents = [["default intent 1", "default intent 2", "default intent 3"]["default intent 1", "default intent 2", "default intent 3"]];

  //create the fetch request
  //use threeIntents for now. Hopefully in the future it will be a new getBestIntents controller.
  
  
  // intents = await
  // fetch(`http://localhost:8080/api/v1/transcripts/threeIntents`, {method: "GET", headers: headerData})
  // .then((response) => response.json())
  // .then((data) => {
  //   //intents = data;
  //   console.log(data);
  //   return data;
  // });

  // more debugging, shows that intents has a promise, which is the return above.
  console.log(intents);

  // set intents to its own promise:
  //intents = intents.then((data) => {return data;});

  // still have to handle bad data here, or in the backend at least. Whatever is cleaner

  //for now, make a dict with keys like Option A, etc.

  //var newIntents = {"Option A": intents[0], "Option B": intents[1], "Option C": intents[2]};
  
  var newIntents = {"Option A": intents[0][0], "Option B": intents[1][0]};

  //var newIntents = {"Option A": ()=> {intents[0][0],intents[0][1],intents[0][2]}, "Option B":() => {intents[1][0],intents[1][1],intents[1][2]}};

  console.log(newIntents);

  // i wonder if i could just return intents in the .then statement instead of declaring a variable and modifying it to do this.
  return newIntents;
}