import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./presentation/pages/MainPage";
import EnablePage from "./presentation/pages/EnablePage";
import UploadPage from "./presentation/pages/UploadPage";
import HelpPage from "./presentation/pages/HelpPage";
import EndPage from "./presentation/pages/EndPage"; 
import React from 'react';

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
