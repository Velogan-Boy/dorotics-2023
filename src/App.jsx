import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { lightTheme, GlobalStyles } from './themes';

// Pages
import Landing from './pages/Landing/Landing'
import About from "./pages/About/About";
import Navbar from './components/Navbar/Navbar';
import Committee from './pages/Committees/Committee';
import Tracks from './pages/Tracks/Tracks';

import './App.css';
import PaperSubmission from './pages/PaperSubmission/PaperSubmission';

function App() {
   return (
      <ThemeProvider theme={lightTheme}>
         <GlobalStyles />
         <div className="App">
            <Router>
               <Navbar />
               <AllRoutes />
            </Router>
         </div>
      </ThemeProvider>
   );
}

const AllRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Landing />} />
         <Route path="/about" element={<About />} />
         <Route path="/committee" element={<Committee />} />
         <Route path="/tracks" element={<Tracks />} />
         <Route path="/paper-submission" element={<PaperSubmission />} />
         <Route
            path="*"
            element={
               <div style={{ padding: "7rem 0rem", textAlign: "center" }}>
                  <p style={{
                     color: "rgb(119, 119, 119)",
                     letterSpacing: "1.25px",
                     fontSize: "1.5rem",
                     lineHeight: "1.4"
                  }}>Content will be updated soon!</p>
               </div>
            }
         />
      </Routes>
   );
};


export default App;

