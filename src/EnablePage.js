// DONT remove router, route, and routes, ignore warning this is needed
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {Button} from './StyledPrompt';
function EnablePage(){
  return (
    <div>
        <Link to="/uploadpage">
            <Button>
                <p>Enable Prompt Suggestions</p>
            </Button>
        </Link>
    </div>
  );
};

export default EnablePage;
