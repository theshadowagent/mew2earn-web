import './App.css';
import GameScreen from './components/GameScreen';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
            <img src="switch.png" style={{
                width: "80vw"
            }} />
            <GameScreen />
        </div>
      </ThemeProvider>
  );
}

export default App;
