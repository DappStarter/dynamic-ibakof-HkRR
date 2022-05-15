require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note pitch equip hidden kite metal gift'; 
let testAccounts = [
"0x5b2ca1941a24486496a1cf6c25cae986314dc28bd97a8a29584e47c67571af77",
"0xbbd67057cfd3babdb92be302f89b0381a29a34a100851074871bae5812d127ce",
"0x66be0176404e3d4ffa177afaa6260656ddbeb43d0d88144bf9f673f1cbfd0187",
"0x400a68d499acab24e6c56a1191291b340c2920a2143ed38a597f4690da55a887",
"0x2743f77a6207dcdb52c22f6b155864e9987d0d8343826ba62b710cadbd591f81",
"0x268ede3f7ccd824a174f342bfca3f73d7045def5c3d31618c0a0c9e0c4f4afa2",
"0xc881f9d18381c03c116627eef768341ac43f10105a714719b6e695bb2a591fe7",
"0x43b9f7398d111392e7ddb347d7ac4c1817ea9f248f2e91bc6c0cb341f9ff1dbf",
"0x1f87b284b5f2341652aa3626180cf57e844c64e27aeabfb982614031ae90aadb",
"0xbd9d1525b77751584d408fa6899a492fc215baa19e0aa3a2b903b0c55b46c22c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

