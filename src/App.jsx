import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { lightTheme, GlobalStyles } from './themes';

// Pages
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Committee from './pages/Committees/Committee';
import Tracks from './pages/Tracks/Tracks';
import PaperSubmission from './pages/PaperSubmission/PaperSubmission';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact';

import './App.css';
import Keynotes from './pages/Keynotes/Keynotes';
import Dates from './pages/Dates/Dates';

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
         <Route path="/register" element={<Register />} />
         <Route path="/keynote" element={<Keynotes />} />
         <Route path="/dates" element={<Dates />} />
         <Route path="/contact-us" element={<Contact />} />
      </Routes>
   );
};

export default App;
