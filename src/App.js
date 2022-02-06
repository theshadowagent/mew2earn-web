import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { Web3Provider } from './components/Web3Context';
import AuthScreen from './components/AuthScreen';

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Web3Provider>
            <div className="App">
                <img src="switch.png" style={{
                    width: "80vw"
                }} />
                <AuthScreen />
            </div>
          </Web3Provider>
      </ThemeProvider>
  );
}

export default App;
