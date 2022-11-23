// eslint-disable-next-line
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect, useLayoutEffect } from "react";
import vfLogo from '../../assets/voiceflowLogo.png'
import NLUlogo from '../../assets/NLULogoTransparent.png';
import { HoverButtonNoClick } from '../framerMotionComponents/HoverButton';
import { Tab, StyledDiv } from './StyledConstants';

import { getBestIntents, getDefaultIntents } from '../../../controllers/UserRequests';

// Define the list of types that serve as the selection of tabs on the left
//export var types = ['Option A', 'Option B', 'Option C'];

//This is the type of the voiceflow blocks
export var types = ["Option A", "Option B"];

//TEMPORARY FIX TO CALL GET REQUEST ONCE (no classes): 
//Variable might need to be a use state variable to work properly 
var getRequestCalled = false; 

// Define the dictionary of prompts that map each tab to the selected prompt
// martin note: should this even be exported?
// export var prompts = getBestIntents(); //attempting to do this in the tabgroup function component below
// export var prompts = {'Option A': 'Would you like to see the new sale on Mongolian fishing boots?', 
// 'Option B': 'The Fishing Boots your looking for can be found under shoes', 
// 'Option C': 'Would you like to get to extend your plan or switch plans?'};

// Define the styled header for the left header cotaining the tabs
// const StyledDiv = styled.div`
//     background-color: #1fc8db;
//     background-image: linear-gradient(180deg, #5784e4 0%, #633366 50%, #3f1243 75%);
//     display: left;
//     padding: 20px;
//     flex-direction: column;
//     height: 100vh;
    
//     color: ${(props) => props.color};

//     p {
//         font-size: 30px;
//         color: white;
//     }
// `;

// // different color themes we can set our buttons to
// const theme = {
//     blue: {
//         default: '#3c6cd7',
//         hover: '#3460c4'
//     },
//     white: {
//         default: '#808080',
//         hover: '#3c6cd7'
//     }
// }

// //Set css attributes for a button including hover which makes it tinted and disabled (opaque look)
// export const Button = styled.button`
//     background-color: ${props => theme[props.theme].default};
//     color: white;
//     padding: 5px 15px;
//     border-radius: 5px;
//     border: none;
//     outline: 0;
//     text-transform: uppercase;
//     margin: 10px 0px;
//     font-size: 30px;
//     cursor: pointer;
//     transition: ease background-color 250ms;
//     &:hover {
//         background-color: ${props => theme[props.theme].hover};
//     }
//     &:disabled {
//         cursor: default;
//         opacity: 0.7;
//     }
// `;

// // Set the default look of a button to blue theme
// Button.defaultProps = {
//     theme: "blue"
// };

// Set a default list of prompts tbd: update these to be based on back-end
export var activeTab = types[0];
// i believe this is the most accurate starting prompt, and the code probably will not break.
export var chosenPrompt = ["Loading Option 1 ...", "Loading Option 2 ...", "Loading Option 3 ..."];
//export var chosenPrompt = prompts[activeTab];
// Keeps track of old prompt to be changed with tab changes
var oldActive = types[0];

// Set css attributes of each styled tab, changes look when it is active
// const Tab = styled.button`
//     display: flex;
//     color: white;
//     padding: 20px 30px;
//     cursor: pointer;y
//     opacity: 0.6;
//     background: transparent;
//     border: 0;
//     outline: 0;
//     border-bottom: 2px solid transparent;
//     transition: ease border-bottom 250ms;
//     font-size: 30px;
    
//     ${({ active }) =>
//         active &&
//         `
//         border-bottom:2px solid white;
//         opacity: 1;
//     `}
// `;

// Switch tab functionality that allows user to tab between different 
function TabGroup({ updatePromptScreen }) {
    const [active, setActive] = useState(types[0]);
    const [prompts, setPrompts] = useState(
        { [types[0]]: ["Loading Option A1...", "Loading Option A2...", "Loading Option A3..."], [types[1]]: ["Loading Option B1...", "Loading Option B2...","Loading Option B3..." ]});
    // const [prompts, setPrompts] = useState(
    //     {"Option A": "Defaulto Intento 1", "Option B": "Defaulto Intento 2", "Option C": "Defaulto Intento 3"});

    // limits updateActivePrompt to be called only once when the active tab is changed
    // oldActive checks to see if the active tab has been changed and if so function called once and oldActive updated
    useEffect(() => {
        if (oldActive !== active) {
            oldActive = active;
            updateActivePrompt(active);
        }

        if (!getRequestCalled){
            
            const fetchData = async () => {
                var intents = await getDefaultIntents();
                setPrompts({[types[0]]:intents[0], [types[1]]:intents[1]});
            }

            fetchData().catch(console.error);

            getRequestCalled = true;
        }

        
        
        // eslint-disable-next-line
    }, [active])

    // useLayoutEffect(()=>{

    //     const fetchData = async () => {
    //         setPrompts(await getBestIntents);
    //     }

    //     fetchData().catch(console.error);
    // }, []);

    // the active tab and chosenPrompt based on that tab selected are set
    // updatePromptScreen is called which runs in MainPage.js to re-render the page and 
    // have the active tab change result in changes to the prompt box on the right
    function updateActivePrompt(prompt) {
        activeTab = prompt;
        chosenPrompt = prompts[activeTab];
        updatePromptScreen();
    }

    // define the css tabs components including message and each tab
    // tabs uses setActive react hook function that updates the active tab to the one clicked on 
    return (
        <>
            {/* Define css attributes of text above tabs*/}
            <p
                style={{
                    display: 'flex',
                    alignItems: 'left',
                    justifyContent: 'left',
                    fontSize: 25,
                    flexWrap: 'wrap',
                    marginTop: 30

                }}>
                Your Best First Prompts:
            </p>

            {/* Define css attributes of tabs*/}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'left',

                }}
            >
                {/* Define active tab functionality using onClick to set the active tab be the one selected from the list of types*/}
                {types.map(type => (
                    <Tab
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                    >
                        {type}
                    </Tab>

                ))}
            </div>
        </>
    );
}


// maybe this class belongs in a different file
// new java script component class made by martin. will be used to make the async calls with didmount

// ditching this for now, will try to add dynamic prompts rerendering above.

// class StyledHeader extends React.Component {

//     //constructor for the component, for rendering
//     constructor() {
//         super();
//         this.state = 
//         { prompts : {"Option A": "Defaulto Intento 1", "Option B": "Defaulto Intento 2", "Option C": "Defaulto Intento 3"}};
//     }

//     async componentDidMount() {
//         // pretty sure await makes a difference here, will remove if not.
//         const response = await getBestIntents;

//         // set state to rerender should be perfect here; will rerender with new intents once promise is filled
//         // maybe we can render a loading screen in the meantime???????? Might not be necessary

//         this.setState({prompts : response});
//     }


//     // render function for exporting the class below:
//     // have to pass in updatePromptScreen for now, as the original app return value function thing did
//     render({updatePromptScreen}){
//         return (
//             <>
//                 {/* Define css structure of header containing tabs, buttons, and logos */}
//                 <StyledDiv>
//                     {/* Display voiceflow logo */}
//                     <td><img style={{ width: 182.75, height: 52.25}} src={vfLogo} className="voiceflow-logo" alt="vf-logo" /></td>

//                     {/* Display tabgroup and send updatePromptScreen function as argument to update chosen prompt whenever tab is selected */}
//                     <TabGroup updatePromptScreen={updatePromptScreen}/>

//                     {/* Define css attributes for div for help and reupload buttons and NLU logo */}
//                     <div style={{ 
//                             display: 'flex',
//                             flexDirection: 'column',                
//                             alignItems: 'center',
//                             marginTop: 30}}>

//                         {/* Display button that takes you back to help page */}
//                         <Link to="/helppage">
//                             <motion.div whileHover={{scale: 1.2}}>
//                                 <Button theme="white">
//                                     Help & Support
//                                 </Button>
//                             </motion.div>
//                         </Link>

//                         {/* Display button that takes you back to upload page */}
//                         <Link to="/uploadpage">
//                             <motion.div whileHover={{scale: 1.2}}>
//                                 <Button theme="white">
//                                     Reupload Info
//                                 </Button>
//                             </motion.div>
//                         </Link>

//                         {/* Display NLU logo */}
//                         <img style={{ width: 200, height: 200, marginTop: 30}} src={NLUlogo} className="NLU-logo" alt="NLU-logo" />
//                     </div>
//                 </StyledDiv>
//             </>
//         );
//     }

// }

// Define the css structure of the left header
// Has the logo, tabGroup with tabs, buttons for help and upload pages, and NLU logo at the bottom
export default function App({ updatePromptScreen }) {
    return (
        <>
            {/* Define css structure of header containing tabs, buttons, and logos */}
            <StyledDiv>
                {/* Display voiceflow logo */}
                <td><img style={{ width: 182.75, height: 52.25 }} src={vfLogo} className="voiceflow-logo" alt="vf-logo" /></td>

                {/* Display tabgroup and send updatePromptScreen function as argument to update chosen prompt whenever tab is selected */}
                <TabGroup updatePromptScreen={updatePromptScreen} />

                {/* Define css attributes for div for help and reupload buttons and NLU logo */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 30
                }}>

                    {/* Display button that takes you back to help page */}
                    <HoverButtonNoClick link={"/helppage"} text={"Help & Support"}  />

                    {/* Display button that takes you back to upload page */}
                    <HoverButtonNoClick link={"/uploadpage"} text={"Reupload Info"} />

                    {/* Display NLU logo */}
                    <img style={{ width: 200, height: 200, marginTop: 30 }} src={NLUlogo} className="NLU-logo" alt="NLU-logo" />
                </div>
            </StyledDiv>
        </>
    );
}
