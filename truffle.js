// Allows us to use ES6 in our migrations and tests.
require('babel-register');
const { readFileSync } = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = readFileSync('./mnemonic', 'utf-8');
const infuraApikey = readFileSync('./infura_access_token', 'utf-8');

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
    },
    mainnet: {
      provider: function () {
        return new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraApikey}`);
      },
      network_id: 1,
    }
  },
};
