import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./MainPage";
import EnablePage from "./EnablePage";
import UploadPage from "./UploadPage";
import HelpPage from "./HelpPage";
 
function App() {
  return (
    <Router>
      <div>
        {/*Wrap Route components in a Routes component */}
        <Routes>
          {/*Set the EnablePage as the default Route*/}
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/uploadpage" element={<UploadPage />} />
          <Route path="/helppage" element={<HelpPage />} />
          <Route path="/" element={<EnablePage />} />
        </Routes>
      </div>
    </Router>
  );
};
 
export default App;
