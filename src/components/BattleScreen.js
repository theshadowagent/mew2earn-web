export const BattleScreen = () => {
    const nintendoSwitchScreenRatio = 692 / 1302
    return <iframe style={{
        position: "absolute",
        border: 0,
        width: "44.6vw",
        height: `${44.6 * nintendoSwitchScreenRatio}vw`
    }} src="https://pokemon-showdown-client-git-feature-metamask-login-buildship.vercel.app/testclient.html" />
}

export default BattleScreen
