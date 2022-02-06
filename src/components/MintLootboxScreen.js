import { createStyles, Typography} from '@mui/material';
import { mintLootbox } from '../services/mint';

export const MintLootboxScreen = () => {

    const renderPokeball = (index) => {
        const positionX = Math.abs(index) === 1 ? `${Math.sign(index) * 18}vw` : "0"
        const positionY = Math.abs(index) === 0 ? "-4vw" : "8vw"
        return <img
            style={{
                ...styles.pokeball,
                marginLeft: positionX,
                marginTop: positionY
            }}
            onClick={async () => {
                await mintLootbox()
            }}
            src="./pokeball.png"
        />
    }

    const renderLootbox = () => (
        <div style={styles.dimmedGameBackground}>
            <Typography
                style={{
                    position: "absolute",
                    top: 20
                }}
                variant="h1">
                Congrats, you won!<br/>
                Choose a pokemon to own
            </Typography>
            {renderPokeball(-1)}
            {renderPokeball(0)}
            {renderPokeball(1)}
        </div>
    )

    return <>
        {renderLootbox()}
    </>
}

const nintendoSwitchScreenRatio = 692 / 1302
const gameBackground = {
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

const styles = {
    dimmedGameBackground: {
        ...gameBackground,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${gameBackground.backgroundImage}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover'
    },
    pokeball: {
        width: "5vw",
        maxWidth: "48px",
        position: "absolute",
        "&:hover": {
            cursor: "pointer"
        },
    }
}

export default MintLootboxScreen
