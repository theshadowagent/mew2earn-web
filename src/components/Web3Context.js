import React, { useState, createContext } from "react";

export const WalletState = {
    NOT_LOADED: 1,
    WEB3_LOADED: 2,
    WEB3_CONNECTED: 3,
    WRONG_NETWORK: 4,
    UNKNOWN_ERROR: 5
}

const defaultContext = {
    walletState: WalletState.NOT_LOADED,
    address: undefined
}

export const Web3Context = createContext([defaultContext, () => defaultContext]);

export const Web3Provider = (props) => {
    const [state, setState] = useState(defaultContext);

    return (
        <Web3Context.Provider value={[state, setState]}>
            {props.children}
        </Web3Context.Provider>
    );
};
