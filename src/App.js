import './App.css';
import GameScreen from './components/GameScreen';

function App() {
  return (
    <div className="App">
        <img src="switch.png" style={{
            width: "80vw"
        }} />
        <GameScreen />
    </div>
  );
}

export default App;
