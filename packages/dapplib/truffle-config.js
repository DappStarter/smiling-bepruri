require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict hero force spot toy note maze puppy include process olympic giant'; 
let testAccounts = [
"0x67e70f8881c0bf56071c7638f75e1ca6d21ffcf5ea779264f2f60a57ef71098e",
"0x0682aa96ba8f5016f04b0110689d848917ead3152308e90eac45fa4ce441b562",
"0xaee003d7ddb41d96d06d09aeb3e1a8ecb53b03dc2e18060bb141341aba535d00",
"0x84da26a3530baa7b65f97af7353261e2a7863e1b329d703bd8ae79b2abb86b6f",
"0xfee6a57e2aa3e8bdce789b9d260383fc5d8d5cfa3301d37dbc78af177e872610",
"0x2a9b81203f17e7971999d07f033d3e9dbe5c8fe3d1963464d7181208ad0602a4",
"0x632dc108f4d00e57ac37d6652e4c5d72d052dc7471597e6c9dcce959286cc6f9",
"0x50c602a4288ca82be749a1b58739c85361f0e168d4c06e6d1f829792e0297bb1",
"0x3334a9e1828769e4413d19ac51caef270e99c03a672f775ba43f655ae0acf33c",
"0xef0010125f7142eeeb9134cc462aa65f38dbfa1a415754124d87404d6e049e8f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

