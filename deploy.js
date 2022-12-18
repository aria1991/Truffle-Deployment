const TruffleConfig = require("@truffle/config");
const { readFileSync } = require("fs");

const network = "development"; // or "rinkeby" or "kovan"
const privateKey = readFileSync(".private_key", "utf-8").trim();

const config = TruffleConfig.load("./truffle-config.js");
config.network = network;
config.from = privateKey;
config.provider = config.networks[network].provider();

const FileStorage = artifacts.require("FileStorage");

module.exports = function(callback) {
  FileStorage.deployed()
    .then(function(instance) {
      console.log(`FileStorage contract deployed at address: ${instance.address}`);
    })
    .catch(function(error) {
      console.log(error);
    })
    .finally(function() {
      callback();
    });
};
