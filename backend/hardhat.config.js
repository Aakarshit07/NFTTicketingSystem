require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
    solidity: "0.8.20",
    networks: {
        hardhat: {},
        localhost: {
            url: "http://127.0.0.1:8545"
        }
        // Add other networks as needed
    }
};