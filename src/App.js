import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import EnablePage from "./pages/EnablePage";
import UploadPage from "./pages/UploadPage";
import HelpPage from "./pages/HelpPage";
import EndPage from "./pages/EndPage"; 

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
          <Route path="/endpage" element={<EndPage />} />
          <Route path="/" element={<EnablePage />} />
        </Routes>
      </div>
    </Router>
  );
};
 
export default App;
