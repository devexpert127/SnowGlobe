const SnowGlobe = artifacts.require("SnowGlobe");
const baseURL = "https://ipfs.io/ipfs/QmUdr64exU811HNLHFXFfnfL7XujRXtmBbAJHAA6qFWmQs/"

module.exports = function(deployer) {
  deployer.deploy(SnowGlobe, baseURL);
};