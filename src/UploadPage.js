// DONT remove router, route, and routes, ignore warning this is needed
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Button, StyledExternalLink } from './StyledPrompt';
import styled from "styled-components";
import './UploadPage.css';
import './UploadPage.scss'
import vfLogo from './images/voiceflowLogo.png'
import vfdash from './images/vflow-dash.png'
import vfkey from './images/vflow-key.png'
import vfside from './images/vflow-side.png'
import vfurl from './images/vflow-url.png'
import ReactCollapsible from 'react-collapsible';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {getPrompts} from './MainPage';
{/* <Button onClick={getPrompts}>
  <p>Generate Prompts</p>
</Button> */}

// Defining reference constants for animation of various components (to ensure style & motion consistency)
let easing = [0.6, -0.05, 0.01, 0.99];
const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

// Have multiple grouped animated elements appear at slightly offset times.
const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    }
  }
};

// Motion properties for the robot png.
const logoMove = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.2, duration: .2, ...transition }
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

// <>
//   <motion.div className="container"
//     initial={{ opacity: 0, height: 0 }}
//     animate={{ opacity: 1, height: "300vh" }}
//     transition={{ duration: 1, ease: easing }}
//   >
//     {/* Place Voiceflow logo at top of page. */}
//     <motion.div className="pos_abs top_nav" variants={stagger}>
//       <motion.img src={vfLogo} alt="vf-logo" variants={logoMove} height='50px' />
//     </motion.div>

//     <header className='Upload-header'>

//       {/* Button that will actually accept inputs and redirect to MainPage.js to display results. */}
//       <Link to="/mainpage">
//         <Button>
//           <p>Analyze My Chatbot!</p>
//         </Button>
//       </Link>

//       {/* These are the input boxes which accept the user inputs for the API key and version ID */}
//       <motion.div className='App-row'>
//         <ClearableInput className="API-input"></ClearableInput>
//         <ClearableInput className="version-input"></ClearableInput>
//       </motion.div>

//       {/* Link to the Voiceflow website should users need to find required information - opens in a new tab */}
//       <StyledExternalLink text='Link to Voiceflow' href='https://www.voiceflow.com/' target="_blank" rel="noopener noreferrer" />

//       <motion.div className="content_left" variants={stagger}>
//         <Button>
//           {/* Content contained within the API key help collapsible. */}
//           <ReactCollapsible trigger="Where do I find my API key?">
//             <p>
//               Your API key can be found by going to the Voiceflow website and following these steps:
//             </p>
//             <p>

//               (1) From your Voiceflow dahsboard, click on the chatbot you wish to analyze.
//             </p>
//             <img src={vfdash} alt='vf-dash'></img>
//             <p>
//               (2) From within the chatbot canvas, navigate to the sidebar and click "Integration."
//             </p>
//             <img src={vfside} alt='vf-side'></img>
//             <p>
//               (3) Copy your API key and paste it into the appropriate textbox here!
//             </p>
//             <img src={vfkey} alt='vf-key'></img>


//           </ReactCollapsible>
//         </Button>
//       </motion.div>

//       {/* Version ID help collabsible */}
//       <Button>
//         {/* Content contained within the version ID help collapsible. */}
//         <ReactCollapsible trigger="Where do I find my version ID?">
//           <p>
//             Your API key can be found by going to the Voiceflow website and following these steps:
//           </p>
//           <p>

//             (1) From your Voiceflow dahsboard, click on the chatbot you wish to analyze.
//           </p>
//           <img src={vfdash} alt='vf-dash'></img>
//           <p>
//             (2) From within the chatbot canvas, navigate to the url and copy the last string of characters.
//           </p>
//           <img src={vfurl} alt='vflow-url'></img>
//           <p className='Paragraph-side'>(3) Paste this into the appropriate textbox and you're done!</p>
//         </ReactCollapsible>
//       </Button>

//     </header>
//   </motion.div>
// </>
// Defining reference constants for animation of various components (to ensure style & motion consistency)
const fadeInUp = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: .3
    }
  }
};

const letter = {
  initial: {
    opacity: 0,
    x: -400,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1, ...transition,
      delay: 1.2,
    }
  }
};

const h3 = {
  initial: {
    top: "-20%",
    opacity: 0,
    transition: { duration: 0.05, ease: easing },
    scale: 0.8
  },
  animate: {
    top: "50%",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

function UploadPage() {
  const Title = 'Submit Your Information Below'
  return (
    <div className="main_container">
      <section class="ready__started project__form">
        <motion.div class="container-fluid"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          transition={{ duration: 1, ease: easing }}>
            <motion.div className="wrapper" initial='initial' animate='animate'>
            <motion.div className="pos_abs top_nav" variants={stagger}>
          <motion.h3 variants={h3} class="text-center">Submit Your Information Below</motion.h3>
          
          </motion.div>
          <motion.div class="ready__started-box"
          initial={{ opacity: 0, height: 0, y: 0, x: '38vw'}}
          animate={{ opacity: 1, height: "50vh", y:50, x: '38vw' }}
          transition={{ duration: 1, ease: easing }}
          whileHover={{ scale: 1.2}}
          variants={stagger}>
            <form class="main__form">
              <div class="row">
                <motion.div variants={fadeInUp}>
                  <div class="form-group">
                    <input type="text" class="form-control" id="apiKey" aria-describedby="apiKey" placeholder="API Key" required />
                    <label for="apiKey">API Key</label>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <div class="form-group">
                    <input type="text" class="form-control" id="versionID" aria-describedby="versionID" placeholder="Version ID" required />
                    <label for="versionID">Version ID</label>
                  </div>
                  <div class="col-md-6">
                  </div>
                </motion.div>
              </div>
              <div class="text-center">
                <Link to="/mainpage">
                  <button type="submit" class=" btn btn-get"><span> Submit Now!</span></button></Link></div>

              <motion.div variants={fadeInUp}><Link to="/helppage"><p class="text-center"><br></br><br></br><br></br><br></br>Don't know this information?</p></Link></motion.div>

            </form>
            </motion.div>
          </motion.div>
          </motion.div>
      </section>
    </div>
  );
}


export default UploadPage;
