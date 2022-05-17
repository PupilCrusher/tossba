require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/pIznjKBSkPBhxHmODOgaMqAwINBM1dCG',
      accounts: ['f896edc4e31dc1fe554c9d1997431a5eb404ed48e8629b15642903b0e3a0ccee'],
    },
  },
};