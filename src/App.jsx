import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { lightTheme, GlobalStyles } from './themes';

// Pages
import Landing from './pages/Landing/Landing'

import Navbar from './components/Navbar/Navbar';

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
         {/* <Route path="/about" element={<About />} /> */}
      </Routes>
   );
};


export default App;

