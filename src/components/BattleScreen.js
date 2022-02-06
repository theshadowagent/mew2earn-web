export const BattleScreen = ({ url }) => {

    const nintendoSwitchScreenRatio = 692 / 1302
    return <iframe style={{
        position: "absolute",
        border: 0,
        width: "44.6vw",
        height: `${44.6 * nintendoSwitchScreenRatio}vw`
    }} src={url} />
}

export default BattleScreen
