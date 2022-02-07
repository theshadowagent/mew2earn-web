import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { Web3Provider } from './components/Web3Context';
import AuthScreen from './components/AuthScreen';
import { Box } from '@mui/material';

function App() {
    const renderCopyright = () => {
        return <Box sx={{
            position: "absolute",
            color: "white",
            textAlign: "center",
            padding: "20px",
            fontSize: "12px",
            width: "100vw",
            left: 0,
            bottom: 0,
        }}>
            Mew2earn is a fan open-source project that earns 0$. The copyright is owned by Nintendo & The Pokemon Company. The game is based on open-source MIT-licensed Pokemon Showdown game.
        </Box>
    }
    return (
          <ThemeProvider theme={theme}>
              <Web3Provider>
                <div className="App">
                    <img src="switch.png" style={{
                        width: "80vw"
                    }} />
                    <AuthScreen />
                </div>
                  {renderCopyright()}
              </Web3Provider>
          </ThemeProvider>
    );
}

export default App;
