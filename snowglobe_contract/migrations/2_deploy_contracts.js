const SnowGlobe = artifacts.require("SnowGlobe");
const baseURL = "https://snowglobes.mypinata.cloud/ipfs/QmchmJkv3HatJCg7AE6oJpDvVwNH6mvZBdAx7nqbsyaMB9/"

module.exports = function(deployer) {
  deployer.deploy(SnowGlobe, baseURL);
};