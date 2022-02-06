import { Web3Auth } from '@web3auth/web3auth';
import Web3 from 'web3';
import { WalletState } from './Web3Context';

let web3AuthInstance = null;

export const initWeb3Auth = async (setWeb3State) => {
    // ⭐️ STEP: 1
    web3AuthInstance = new Web3Auth({
        chainConfig: {
            chainNamespace: "eip155"
        },
        clientId: "BBTkiWNqG4YdXVqfuuffGIgcX6HJZcVSiung7iR5DlpkpXcK9A9Ai_veWlMHZhT9wYiP1IkF_HLt4BUKrQ68ZjM",
    });


    // ⭐️ STEP: 2
    subscribeAuthEvents(web3AuthInstance)

    // ⭐️ STEP: 3
    await web3AuthInstance.initModal();

    // ⭐️ STEP: 4
    login(setWeb3State);
    return web3AuthInstance
}

export const subscribeAuthEvents = (web3auth) => {
    console.log("WEB3AUTH", web3auth)
    web3auth.on("connected", (data) => {
        console.log("Yeah!, you are successfully logged in", data);
    });

    web3auth.on("connecting", () => {
        console.log("connecting");
    });

    web3auth.on("disconnected", () => {
        console.log("disconnected");
    });

    web3auth.on("errored", (error) => {
        console.log("some error or user have cancelled login request", error);
    });

    web3auth.on("MODAL_VISIBILITY", (isVisible) => {
        console.log("modal visibility", isVisible)
    });
}

// ⭐️ STEP 4:
// this function will be triggered on click of button with login id.
const login = async (setWeb3State) => {

    // we will use this provider with web3 library in STEP 5.
    const provider = await web3AuthInstance.connect()

    // ⭐️ It will return user's social information if logged in with social login method
    // else it will return empty object.
    const user = await web3AuthInstance.getUserInfo();

    // console.log('user', user);

    return initWeb3(setWeb3State);
}


// ⭐️ STEP 5:
const initWeb3 = async (setWeb3State) => {
    // we can access this provider on `web3AuthInstance` only after user is logged in.
    // This provider is also returned as a response of `connect` function in step 4. You can use either ways.
    const web3 = new Web3(web3AuthInstance.provider);

    window.web3 = web3;

    const address = (await web3.eth.getAccounts())[0];
    setWeb3State({
        walletState: WalletState.WEB3_CONNECTED,
        address
    })
    const balance = await web3.eth.getBalance(address);

    console.log('Connected to Ethereum network', {
        address, balance,
    });

    return web3;
}
