// DONT remove router, route, and routes, ignore warning this is needed
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {Button, StyledExternalLink} from './StyledPrompt';
import styled from "styled-components";
import { ClearableInput } from './ClearableInput';
import './UploadPage.css';
import vfLogo from './images/voiceflowLogo.png'
import vfdash from './images/vflow-dash.png'
import vfkey from './images/vflow-key.png'
import vfside from './images/vflow-side.png'
import vfurl from './images/vflow-url.png'
import ReactCollapsible from 'react-collapsible';
import {motion} from 'framer-motion';

const StyledText = () => (    
  <StyledDiv>
    <img style={{ width: 182.75, height: 52.25}} src={vfLogo} className="voiceflow-logo" alt="vf-logo" position={'left'}/>
    <p> Enter Your Information </p>
  </StyledDiv>
);

const StyledDiv = styled.div`
    padding-top: calc(0.1vmin);
    padding-left: 20px;
    text-align: center;
    padding-bottom: calc(0.1vmin);
    color: white;
    background-color: #11172b;


    p {
        font-size: calc(20px + 2vmin);
        text-align: center;
    }
`;
//import {getPrompts} from './MainPage';
{/* <Button onClick={getPrompts}>
  <p>Generate Prompts</p>
</Button> */}

// Defining reference constants for animation of various components (to ensure style & motion consistency)
let easing = [0.6, -0.05, 0.01, 0.99];
const transition = {duration:1, ease:[0.6, 0.01, -0.05, 0.9]};

// Have multiple grouped animated elements appear at slightly offset times.
const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1,
    }
  }
};

// Motion properties for the robot png.
const logoMove ={
  initial:{
    opacity:0,
    x:100
  },
  animate:{
    opacity:1,
    x:0,
    transition:{delay:1.2, duration:.2, ...transition}
  }
};

// Below commented block is old upload page, keeping for redundancy until we're sure the new page is finished and working.

// function UploadPage(){
//   return (
//     <>
//         <motion.div className="container" 
//                 initial={{opacity:0, height:0}}
//                 animate={{opacity:1, height:"100vh"}}
//                 transition= {{duration:1, ease:easing}}
//                 >
//     <StyledText/>
//     <header className='Upload-header'>

//       <Link to="/mainpage">
//           <Button>
//               <p>Analyze My Chatbot!</p>
//           </Button>
//       </Link>
//       <div className='App-row'>
//       <ClearableInput className="API-input"></ClearableInput>
//       <ClearableInput className="version-input"></ClearableInput>
//       </div>
      
//       <StyledExternalLink text='Link to Voiceflow' href='https://www.voiceflow.com/' target="_blank" rel="noopener noreferrer"/>

//       <Button>
//       <ReactCollapsible trigger="Where do I find my API key?">
//       <p>
//         Your API key can be found by going to the Voiceflow website and following these steps:
//         </p>
//         <p>

//         (1) From your Voiceflow dahsboard, click on the chatbot you wish to analyze.
//       </p>
//       <img src={vfdash} alt='vf-dash'></img>
//       <p>
//         (2) From within the chatbot canvas, navigate to the sidebar and click "Integration."
//       </p>
//       <img src={vfside} alt='vf-side'></img>
//       <p>
//         (3) Copy your API key and paste it into the appropriate textbox here!
//       </p>
//       <img src={vfkey} alt='vf-key'></img>


//     </ReactCollapsible>
//     </Button>

//     <Button>
//       <ReactCollapsible trigger="Where do I find my version ID?">
//       <p>
//       Your API key can be found by going to the Voiceflow website and following these steps:
//       </p>
//       <p>

//       (1) From your Voiceflow dahsboard, click on the chatbot you wish to analyze.
//       </p>
//       <img src={vfdash} alt='vf-dash'></img>
//       <p>
//       (2) From within the chatbot canvas, navigate to the url and copy the last string of characters.
//       </p>
//       <img src={vfurl} alt='vflow-url'></img>
//       <p className='Paragraph-side'>(3) Paste this into the appropriate textbox and you're done!</p>
//     </ReactCollapsible>
//     </Button>

//     </header>
//     </motion.div>
//     </>
//   );
// };

function UploadPage() {
  return (
    <>
      <motion.div className="container"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "300vh" }}
        transition={{ duration: 1, ease: easing }}
      >
        {/* Place Voiceflow logo at top of page. */}
        <motion.div className="pos_abs top_nav" variants={stagger}>
          <motion.img src={vfLogo} alt="vf-logo" variants={logoMove} height='50px' />
        </motion.div>

        <header className='Upload-header'>

          {/* Button that will actually accept inputs and redirect to MainPage.js to display results. */}
          <Link to="/mainpage">
            <Button>
              <p>Analyze My Chatbot!</p>
            </Button>
          </Link>

          {/* These are the input boxes which accept the user inputs for the API key and version ID */}
          <motion.div className='App-row'>
            <ClearableInput className="API-input"></ClearableInput>
            <ClearableInput className="version-input"></ClearableInput>
          </motion.div>

          {/* Link to the Voiceflow website should users need to find required information - opens in a new tab */}
          <StyledExternalLink text='Link to Voiceflow' href='https://www.voiceflow.com/' target="_blank" rel="noopener noreferrer" />

          <motion.div className="content_left" variants={stagger}>
            <Button>
              {/* Content contained within the API key help collapsible. */}
              <ReactCollapsible trigger="Where do I find my API key?">
                <p>
                  Your API key can be found by going to the Voiceflow website and following these steps:
                </p>
                <p>

                  (1) From your Voiceflow dahsboard, click on the chatbot you wish to analyze.
                </p>
                <img src={vfdash} alt='vf-dash'></img>
                <p>
                  (2) From within the chatbot canvas, navigate to the sidebar and click "Integration."
                </p>
                <img src={vfside} alt='vf-side'></img>
                <p>
                  (3) Copy your API key and paste it into the appropriate textbox here!
                </p>
                <img src={vfkey} alt='vf-key'></img>


              </ReactCollapsible>
            </Button>
          </motion.div>

          {/* Version ID help collabsible */}
          <Button>
            {/* Content contained within the version ID help collapsible. */}
            <ReactCollapsible trigger="Where do I find my version ID?">
              <p>
                Your API key can be found by going to the Voiceflow website and following these steps:
              </p>
              <p>

                (1) From your Voiceflow dahsboard, click on the chatbot you wish to analyze.
              </p>
              <img src={vfdash} alt='vf-dash'></img>
              <p>
                (2) From within the chatbot canvas, navigate to the url and copy the last string of characters.
              </p>
              <img src={vfurl} alt='vflow-url'></img>
              <p className='Paragraph-side'>(3) Paste this into the appropriate textbox and you're done!</p>
            </ReactCollapsible>
          </Button>

        </header>
      </motion.div>
    </>
  );
};

export default UploadPage;
