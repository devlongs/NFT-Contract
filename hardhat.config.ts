// require("@nomiclabs/hardhat-waffle");
import "@nomiclabs/hardhat-ethers";
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config({ path: ".env" });


const RINKEBY_API_KEY_URL = process.env.RINKEBY_API_KEY_URL;
const PRIVATE_KEY= process.env.PRIVATE_KEY;

const API_TOKEN = process.env.API_TOKEN;

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        url: "",
      }
    },
    rinkeby: {
      url: RINKEBY_API_KEY_URL,
      accounts: [PRIVATE_KEY],
    },
    goerli: {
      url: "",
      accounts: "",
    },
    mumbai: {
      url: "",
      accounts: "",
    }
  },
  etherscan: {
    apiKey: API_TOKEN
  },
  lockGasLimit: 200000000000,
  gasPrice: 10000000000,
};