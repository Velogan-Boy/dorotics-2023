import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { lightTheme, GlobalStyles } from './themes';

// Pages
import Landing from './pages/Landing/Landing'
import About from "./pages/About/About";
import Navbar from './components/Navbar/Navbar';
import Committee from './pages/Committees/Committee';

import './App.css';

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
      </Routes>
   );
};


export default App;

