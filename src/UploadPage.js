// DONT remove router, route, and routes, ignore warning this is needed
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {Button} from './StyledPrompt';
function UploadPage(){
  return (
    <div>
        <Link to="/mainpage">
            <Button>
                <p>YES</p>
            </Button>
        </Link>
    </div>
  );
};

export default UploadPage;
