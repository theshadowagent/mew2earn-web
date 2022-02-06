import { useContext } from 'react';
import GameScreen, { gameStyles } from './GameScreen';
import { SkewedButton } from './SkewedButton';
import { initWeb3Auth } from './Web3Auth';
import { WalletState, Web3Context } from './Web3Context';

export const AuthScreen = () => {
    const [web3State, setWeb3State] = useContext(Web3Context);

    const renderAuth = () => (
        <div style={gameStyles.gameBackground}>
            <SkewedButton
                onClick={() => {
                    initWeb3Auth(setWeb3State)
                }}
            >
                Login with wallet
            </SkewedButton>
        </div>
    )

    return <>
        {web3State?.walletState === WalletState.WEB3_CONNECTED && <GameScreen />}
        {web3State?.walletState !== WalletState.WEB3_CONNECTED && renderAuth()}
    </>
}

export default AuthScreen
