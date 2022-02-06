import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants';
import BattleScreen from './BattleScreen';
import { listenForWinEvents } from '../services/events';
import MintLootboxScreen from './MintLootboxScreen';

export const GameScreen = () => {
    const [gameStarted, hasGameStarted] = useState(false)
    const [hasWonPreviousBattle, setHasWonPreviousBattle] = useState(undefined)
    const [gameURL, setGameURL] = useState(BASE_URL)

    console.log(gameStarted, hasWonPreviousBattle)

    const updateGameFromPlayerResult = (status) => {
        hasGameStarted(false)
        setHasWonPreviousBattle(status === "lose")
    }

    useEffect(() => {
        listenForWinEvents(updateGameFromPlayerResult)
    }, [])

    const renderMenu = () => (
        <div style={gameStyles.gameBackground}>
            <Button
                variant="contained"
                sx={{
                    width: "210px",
                }}
                onClick={() => hasGameStarted(true)}>
                <span className="unskew">Random battle</span>
            </Button>
            <Button
                sx={{
                    mt: 2,
                    width: "210px",
                }}
                onClick={() => {
                    setGameURL(`${BASE_URL}#teambuilder`)
                    hasGameStarted(true)
                }}
                variant="contained">
                <span className="unskew">Own team battle</span>
            </Button>
        </div>
    )

    return <>
        {gameStarted && <BattleScreen url={gameURL} />}
        {!gameStarted && hasWonPreviousBattle && <MintLootboxScreen />}
        {!gameStarted && renderMenu()}
    </>
}

const nintendoSwitchScreenRatio = 692 / 1302
export const gameStyles = {
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
