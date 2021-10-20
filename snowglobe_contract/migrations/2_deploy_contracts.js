const SnowGlobe = artifacts.require("SnowGlobe");
const baseURL = "https://snowglobes.mypinata.cloud/ipfs/QmWMrNhDRjTbVDZQ4tuT9cfmwF6ukLAqo9RSzP8vphmak9/"

module.exports = function(deployer) {
  deployer.deploy(SnowGlobe, baseURL);
};