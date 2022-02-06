import { NFT_ABI, NFT_ADDRESS } from '../constants';
import { web3 } from '../components/Web3Auth';
import metadata from "./metadata.json"

export const mintLootbox = async () => {
    console.log(web3)
    const [ address ] = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS);
    // TODO: send selected random pokemon to mint params
    selectRandomMetadata()
    const tx = await contract.methods.mint(1).send({
        from: address,
        value: 0
    });
    console.log('tx', tx);
}

const selectRandomMetadata = () => {
    return metadata.filter(t => t.attributes.find(a => a.trait_type === "Tier")?.value === "League 0")[0]
}
