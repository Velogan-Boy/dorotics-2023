import { ThemeProvider } from 'styled-components';

import { lightTheme, GlobalStyles } from './themes';

import './App.css';

function App() {
   return (
      <ThemeProvider theme={lightTheme}>
         <GlobalStyles />
         <div className="App">
            <h1>Dorotics Website coming soon...</h1>
         </div>
      </ThemeProvider>
   );
}

export default App;
