import { Button } from '@mui/material';
import { useState } from 'react';
import BattleScreen from './BattleScreen';

export const GameScreen = () => {
    const [gameStarted, hasGameStarted] = useState(false)

    const renderMenu = () => (
        <div style={styles.gameBackground}>
            <Button
                variant="contained"
                sx={{
                    width: "210px",
                }}
                onClick={() => {
                    hasGameStarted(true)
                }}>
                <span className="unskew">Random battle</span>
            </Button>
            <Button
                sx={{
                    mt: 2,
                    width: "210px",
                }}
                variant="contained">
                <span className="unskew">Own team battle</span>
            </Button>
        </div>
    )

    return <>
        {gameStarted && <BattleScreen />}
        {!gameStarted && renderMenu()}
    </>
}

const nintendoSwitchScreenRatio = 692 / 1302
const styles = {
    gameBackground: {
        position: "absolute",
        border: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "44.9vw",
        marginLeft: "-0.1vw",
        height: `${44.6 * nintendoSwitchScreenRatio}vw`,
        backgroundImage: 'url("./bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover'
    }
}

export default GameScreen
