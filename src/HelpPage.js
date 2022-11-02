// DONT remove router, route, and routes, ignore warning this is needed
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {Button} from './StyledPrompt';
function HelpPage(){
  return (
    <div>
        <p>Some explanations on how this works</p>
        <Link to="/mainpage">
            <Button>
                <p>Back to suggestions</p>
            </Button>
        </Link>
    </div>
  );
};

export default HelpPage;
