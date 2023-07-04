const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "abuse bundle syrup cliff consider bonus element boat welcome biology burger spy";

module.exports = {
  

  networks: {
   
   devnet: {
      provider: function() {
      
         return new HDWalletProvider(mnemonic, 'https://maximum-blue-vineyard.bsc-testnet.discover.quiknode.pro/156af1735a4f78fc823b9841dff19babeb92c7a1/');
 
      },
      network_id: 97,
      gas: 5000000,
      gasPrice: 5e9
 
    }
    
  
  }

};
