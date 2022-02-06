export const GameScreen = () => {
    const nintendoSwitchScreenRatio = 692 / 1302
    return <iframe style={{
        position: "absolute",
        width: "44.6vw",
        height: `${44.6*nintendoSwitchScreenRatio}vw`
    }} src="https://play.pokemonshowdown.com/" />
}

export default GameScreen
