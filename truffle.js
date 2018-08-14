// Allows us to use ES6 in our migrations and tests.
require('babel-register');
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraApikey = 'aeaa556522444ac3a89a949a5b752f46';
let mnemonic = 'doll matrix wish party dragon sibling day solve jungle nest fame theme';

module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: '127.0.0.1',
      //port: 8545,
      port: 8545,
      network_id: '*', // Match any network id
      gas: 2000000,
      gasLimit: 2100000,
      gasPrice: 18000000000,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/${infuraApikey}`);
      },
      network_id: 1,
    }
  },
};
