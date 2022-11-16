/*
Javascript file meant for handling fetch requests to the backend.


Created by Martin Calcaterra on Wednesday November 16th, 2022
*/


// since this is exported, is it as if it is defined inside the page it is imported? is that why i can get apiKey from the html
// element? or is is just global????
export function sendApi() {
  //for debugging
  //alert('api sent');
  //console.log('api sent???');

  //retrieve the text content from the corresponding textbox.
  var submittedApiKey = document.getElementById("apiKey").value;
  var submittedApiVersion = document.getElementById("versionID").value;

  //alert(submittedApiKey + ', '+ submittedApiVersion);

  //the json data sent to the backend
  //JSON.stringify is required for fetch
  const fullEntry = JSON.stringify({
    //if i don't provide an id, mongo will create one called Object(...). IDs have to be unique!
    //id: "15", //constant id
    //id: transcriptOutput, //variable id
    apiKey: submittedApiKey,
    apiVersion: submittedApiVersion,
    //???????
    //prompt: activeTab,
  });

  //the type of data sent
  const headerData = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  }

  //create the fetch request
  fetch(`http://localhost:8080/api/v1/transcripts/storeAPI`, {method: "POST", headers: headerData, body: fullEntry})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

  //empty the textboxes (maybe only do this if the submission fails do to an error or no transcripts or something else?)
  document.getElementById("apiKey").value = "";
  document.getElementById("versionID").value = "";
}